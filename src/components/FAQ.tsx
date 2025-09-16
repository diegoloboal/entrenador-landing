// src/components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    { q: "Soy principiante, vale para mi?",
      a: "Si. Empezamos con tecnica, movilidad y cargas progresivas. Nada de rutinas avanzadas sin base." },
    { q: "Que incluye el seguimiento?",
      a: "Revisiones periodicas, ajustes de cargas y volumen, y soporte por email/WhatsApp." },
    { q: "Necesito dieta estricta?",
      a: "No. Usamos pautas simples y sostenibles enfocadas a recomposicion: proteina, saciedad y adherencia." },
    { q: "Entreno en casa o gimnasio?",
      a: "Como prefieras. Adaptamos el plan al material del que dispones." },
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map(f => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
