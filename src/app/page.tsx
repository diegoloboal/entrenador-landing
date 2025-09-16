// src/app/page.tsx
import Navbar from "@/components/Navbar"
import ScheduleGrid from "@/components/ScheduleGrid"

function SectionTitle(props: { id?: string; title: string; subtitle?: string }) {
  return (
    <div id={props.id} className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      {props.subtitle && <p className="mt-2 text-slate-600">{props.subtitle}</p>}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Entrenamiento personal <span className="text-blue-600">a tu medida</span>
          </h1>
          <p className="mt-4 max-w-prose text-slate-600">
            Mejora fuerza, movilidad y salud con sesiones de 60 min.
            Planificacion individual y seguimiento realista.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#reservar" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
              Reservar ahora
            </a>
            <a href="#precios" className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-blue-400">
              Ver precios
            </a>
          </div>

          {/* bullets */}
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Sesiones 1 a 1
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Seguimiento semanal
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Plan a medida
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Resultados reales
            </li>
          </ul>
        </div>

        {/* visual */}
        <div className="relative h-64 w-full md:h-80">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-2xl" />
          <div className="absolute inset-6 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur" />
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {[
            { t: "Evaluacion inicial", d: "Analizamos tu punto de partida y objetivos." },
            { t: "Tecnica y seguridad", d: "Progresiones seguras adaptadas a ti." },
            { t: "Habitos y constancia", d: "Plan simple que puedes mantener." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Precios */}
      <section className="py-16">
        <SectionTitle id="precios" title="Precios" subtitle="Tarifas simples y claras" />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm text-blue-600">Basico</div>
            <div className="mt-2 text-3xl font-extrabold">€35</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Sesion unica (60 min)</li>
              <li>Plan basico</li>
            </ul>
            <a href="#reservar" className="mt-6 inline-block rounded-lg border px-4 py-2 hover:border-blue-400">
              Empezar
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 ring-2 ring-blue-200">
            <div className="text-sm text-blue-600">Recomendado</div>
            <div className="mt-2 text-3xl font-extrabold">€120</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Bono 4 sesiones</li>
              <li>Plan personalizado</li>
              <li>Soporte por chat</li>
            </ul>
            <a href="#reservar" className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
              Elegir plan
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm text-blue-600">Avanzado</div>
            <div className="mt-2 text-3xl font-extrabold">€220</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Bono 8 sesiones</li>
              <li>Plan avanzado</li>
              <li>Seguimiento semanal</li>
            </ul>
            <a href="#reservar" className="mt-6 inline-block rounded-lg border px-4 py-2 hover:border-blue-400">
              Elegir plan
            </a>
          </div>
        </div>
      </section>

      {/* Reserva (UI estatica) */}
      <section id="reservar" className="border-t border-slate-200 bg-white py-16">
        <SectionTitle title="Reserva tu horario" subtitle="Selecciona un bloque disponible. (Demo sin base de datos)" />
        <div className="mx-auto mt-6 max-w-6xl px-4">
          <ScheduleGrid />
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16">
        <SectionTitle title="Resultados de alumnos" />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {[
            { n: "Laura", t: "Llegue por dolores de espalda y ahora entreno 3 veces por semana sin molestias." },
            { n: "Carlos", t: "Mejoro marcas y tecnica en sentadilla y peso muerto de forma segura." },
            { n: "Ana", t: "Plan sencillo, sin dietas raras, y por fin soy constante." },
          ].map((x) => (
            <figure key={x.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-slate-700">“{x.t}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-slate-900">— {x.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-2 text-slate-600">
            Escribeme a{" "}
            <a className="text-blue-600 underline" href="mailto:tu-email@ejemplo.com">
              tu-email@ejemplo.com
            </a>
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} EntrenadorPro — Todos los derechos reservados
      </footer>
    </>
  )
}
