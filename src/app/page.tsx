// src/app/page.tsx
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import ProgramCards from "@/components/ProgramCards"
import FAQ from "@/components/FAQ"

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Process />
      <ProgramCards />

      {/* Testimonios rapidos */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Resultados reales</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "Javier (38)", t: "Menos 7 kg en 12 semanas sin cardio eterno. Fuerza arriba y mejor postura." },
              { n: "Luis (31)", t: "De cero a 3 dias/semana. Aprendi tecnica y no me lesiono la espalda." },
              { n: "Sergio (41)", t: "Recomp use: perdi grasa y gane hombro/espalda. Ahora mantengo sin sufrimiento." },
            ].map(x => (
              <figure key={x.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-sm text-slate-700">“{x.t}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-slate-900">— {x.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section id="contacto" className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold">Listo para empezar?</h2>
          <p className="mt-2 text-slate-600">Escribeme y te mando info + cuestionario inicial.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
               href="mailto:tu-email@ejemplo.com?subject=Info%20programa%20entrenamiento">
              Pedir info por email
            </a>
            <a className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-blue-400"
               href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} EntrenadorPro — Todos los derechos reservados
      </footer>
    </>
  )
}
