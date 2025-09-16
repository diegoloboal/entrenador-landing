// src/components/Hero.tsx
import Link from "next/link"

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Cambia tu fisico. <span className="text-blue-600">Entrena con plan</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-prose">
          Programas individualizados para hombres 28–42: recomposicion corporal, fuerza y
          tecnica. Pensado para principiantes o para volver al gym sin lesionarte.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#programas" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
            Empezar ahora
          </a>
          <Link href="#metodo" className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-blue-400">
            Ver metodo
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
          <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Plan 100% individual</li>
          <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Seguimiento 12/24 semanas</li>
          <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Tecnica y progresion segura</li>
          <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Nutricion simple y realista</li>
        </ul>
      </div>

      {/* Visual placeholder (sustituir por foto) */}
      <div className="relative h-64 w-full md:h-80">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-2xl" />
        <div className="absolute inset-6 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur" />
      </div>
    </section>
  )
}
