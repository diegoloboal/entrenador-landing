// src/components/Process.tsx
export default function Process() {
  const steps = [
    { t: "Evaluar", d: "Historial, objetivos, medidas y nivel actual." },
    { t: "Plan", d: "Programa de fuerza y condicion adaptado a ti." },
    { t: "Entrenar", d: "Tecnica y progresion sin humo ni atajos." },
    { t: "Ajustar", d: "Revisiones cada 2-4 semanas segun respuesta." },
  ]
  return (
    <section id="metodo" className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Metodo</h2>
        <p className="mt-2 text-slate-600">Sencillo de seguir. Diseñado para durar.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map(s => (
            <div key={s.t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-sm text-blue-600">{s.t}</div>
              <p className="mt-2 text-sm text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
