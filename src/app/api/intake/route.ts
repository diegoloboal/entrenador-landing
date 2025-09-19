// src/app/api/intake/route.ts

type Obj = "perder_peso" | "ganar_masa" | "rendimiento" | "recuperacion_lesion"
type Dias = "1" | "2" | "3" | "4" | "5"
type Cap = "nunca" | "menos_50" | "50_100" | "100_mas"
type Urg = "prisa" | "3_6" | "sin_prisa"
type Exp = "principiante" | "intermedio" | "avanzado"

type IntakePayload = {
  nombre: string
  email: string
  objetivoPrincipal: Obj
  compromisoDias: Dias
  capacidadEconomica: Cap
  urgencia: Urg
  lesiones?: string
  disponibilidad?: string
  material?: string
  mensaje?: string
  experiencia?: Exp
}

function scoreLead(b: Partial<IntakePayload>) {
  // 1) Presupuesto (proxy mensual) — cuanto más, mejor (hasta 35 pts)
  const capPts: number =
    b.capacidadEconomica === "100_mas" ? 35 :
    b.capacidadEconomica === "50_100" ? 25 :
    b.capacidadEconomica === "menos_50" ? 12 :
    0

  // 2) Urgencia — "lo antes posible" vale más (hasta 25 pts)
  const urgPts: number =
    b.urgencia === "prisa" ? 25 :
    b.urgencia === "3_6" ? 12 : 0

  // 3) Compromiso (días/semana) — (hasta 25 pts)
  const d = Number(b.compromisoDias || 0)
  const diasPts =
    d >= 5 ? 25 :
    d === 4 ? 22 :
    d === 3 ? 18 :
    d === 2 ? 10 :
    d === 1 ? 3 : 0

  // 4) Objetivo — salud/estética algo más altos (hasta 8 pts)
  const objPts: number =
    b.objetivoPrincipal === "perder_peso" || b.objetivoPrincipal === "ganar_masa" ? 8 :
    b.objetivoPrincipal ? 5 : 0

  // 5) Experiencia previa — indica que entiende el valor (hasta 4 pts)
  const expPts: number =
    b.experiencia === "avanzado" ? 4 :
    b.experiencia === "intermedio" ? 2 : 0

  // 6) Nivel de detalle — suma texto de campos abiertos (hasta 8 pts)
  const detailLen = [
    b.mensaje, b.lesiones, b.disponibilidad, b.material,
  ].filter(Boolean).join(" ").trim().length
  const detailPts =
    detailLen > 200 ? 8 :
    detailLen > 120 ? 6 :
    detailLen > 60 ? 3 : 0

  const leadScore = capPts + urgPts + diasPts + objPts + expPts + detailPts

  // Tier
  const leadTier =
    leadScore >= 70 ? "Hot Lead" :
    leadScore >= 45 ? "Warm Lead" :
    "Cold Lead"

  // Categoría simple por días (si la usabas antes)
  const categoria =
    d >= 4 ? "lead_caliente" :
    d >= 2 ? "lead_templado" :
    "lead_frio"

  return { leadScore, leadTier, categoria }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<IntakePayload>

    if (!body?.email || !body?.nombre) {
      return new Response("Faltan: nombre y email", { status: 400 })
    }

    const { leadScore, leadTier, categoria } = scoreLead(body)

    const payload = {
      ...body,
      categoria,
      leadScore,
      leadTier,
      submittedAt: new Date().toISOString(),
    }

    const url = process.env.SHEETS_WEBAPP_URL
    if (!url) return new Response("Falta SHEETS_WEBAPP_URL", { status: 500 })

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const text = await res.text()
    if (!res.ok) return new Response(`Sheets error: ${text}`, { status: 500 })

    // Devuelve la clasificación (por si quieres usarla en el UI)
    return Response.json({ ok: true, leadScore, leadTier })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Error"
    return new Response(msg, { status: 500 })
  }
}
