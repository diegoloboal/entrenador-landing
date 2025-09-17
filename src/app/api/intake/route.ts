// src/app/api/intake/route.ts
export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("[INTAKE] body:", body)

    // Validación mínima
    if (!body?.email || !body?.nombre) {
      return new Response("Faltan: nombre y email", { status: 400 })
    }

    // Clasificación simple por horas disponibles
    const horas = Number(body.tiempo || 0)
    const categoria =
      horas >= 4 ? "alta_disponibilidad"
      : horas >= 2 ? "media_disponibilidad"
      : "baja_disponibilidad"

    const payload = { ...body, categoria, submittedAt: new Date().toISOString() }

    const url = process.env.SHEETS_WEBAPP_URL
    if (!url) {
      console.error("[INTAKE] Falta SHEETS_WEBAPP_URL")
      return new Response("Falta SHEETS_WEBAPP_URL", { status: 500 })
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const text = await res.text()
    console.log("[INTAKE] Sheets status:", res.status, text)

    if (!res.ok) {
      return new Response(`Sheets error: ${text}`, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (e: unknown) {
    console.error("[INTAKE] error:", e)
    const msg = e instanceof Error ? e.message : "Error"
    return new Response(msg, { status: 500 })
  }
}
