"use client"

import { useState } from "react"

type FormData = {
  nombre: string
  email: string
  edad: string
  peso: string
  altura: string
  tiempo: string       // horas/semana disponibles
  experiencia: string  // principiante / intermedio / avanzado
  objetivo: string     // recomposicion / perdida grasa / ganar masa
  restricciones: string
  mensaje: string
}

const init: FormData = {
  nombre: "",
  email: "",
  edad: "",
  peso: "",
  altura: "",
  tiempo: "",
  experiencia: "principiante",
  objetivo: "recomposicion",
  restricciones: "",
  mensaje: "",
}

export default function ClientIntakeForm() {
  const [data, setData] = useState<FormData>(init)
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setOk(null); setError(null)
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const txt = await res.text()
      if (!res.ok) throw new Error(txt)
      setOk(true)
      setData(init)
    } catch (err: any) {
      setOk(false)
      setError(err?.message || "Error")
    } finally {
      setLoading(false)
    }
  }

  function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    const { label, ...rest } = props
    return (
      <label className="grid gap-1 text-sm">
        <span className="text-slate-300">{label}</span>
        <input
          {...rest}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        />
      </label>
    )
  }

  function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
    const { label, ...rest } = props
    return (
      <label className="grid gap-1 text-sm">
        <span className="text-slate-300">{label}</span>
        <textarea
          {...rest}
          className="min-h-[90px] rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        />
      </label>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Nombre" placeholder="Tu nombre" required
               value={data.nombre} onChange={e=>setData({...data, nombre:e.target.value})} />
        <Input label="Email" type="email" placeholder="tu@email.com" required
               value={data.email} onChange={e=>setData({...data, email:e.target.value})} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="Edad" type="number" placeholder="ej. 34"
               value={data.edad} onChange={e=>setData({...data, edad:e.target.value})} />
        <Input label="Peso (kg)" type="number" placeholder="ej. 82"
               value={data.peso} onChange={e=>setData({...data, peso:e.target.value})} />
        <Input label="Altura (cm)" type="number" placeholder="ej. 178"
               value={data.altura} onChange={e=>setData({...data, altura:e.target.value})} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="Tiempo disponible (h/semana)" placeholder="ej. 3"
               value={data.tiempo} onChange={e=>setData({...data, tiempo:e.target.value})} />
        <label className="grid gap-1 text-sm">
          <span className="text-slate-300">Experiencia</span>
          <select
            value={data.experiencia}
            onChange={e=>setData({...data, experiencia:e.target.value})}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-slate-300">Objetivo</span>
          <select
            value={data.objetivo}
            onChange={e=>setData({...data, objetivo:e.target.value})}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <option value="recomposicion">Recomposicion</option>
            <option value="perdida_grasa">Perdida de grasa</option>
            <option value="ganar_masa">Ganar masa</option>
            <option value="rendimiento">Rendimiento</option>
          </select>
        </label>
      </div>

      <Textarea label="Restricciones / lesiones (opcional)"
                placeholder="Ej. dolor lumbar, hombro, etc."
                value={data.restricciones} onChange={e=>setData({...data, restricciones:e.target.value})} />

      <Textarea label="Mensaje (opcional)"
                placeholder="Cuéntame algo mas que deba saber"
                value={data.mensaje} onChange={e=>setData({...data, mensaje:e.target.value})} />

      <label className="flex items-start gap-2 text-xs text-slate-400">
        <input type="checkbox" required className="mt-0.5" />
        Acepto el tratamiento de datos para responder a mi solicitud.
      </label>

      <div className="flex items-center gap-3">
        <button
          disabled={loading}
          className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-slate-900 hover:bg-cyan-400 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar cuestionario"}
        </button>
        {ok === true && <span className="text-sm text-emerald-400">Recibido. Te escribire pronto.</span>}
        {ok === false && <span className="text-sm text-red-400">{error || "Error"}</span>}
      </div>
    </form>
  )
}
