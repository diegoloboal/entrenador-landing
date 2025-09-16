// src/components/Navbar.tsx
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* antes: <a href="/" ...> */}
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Entrenador<span className="text-blue-600">Pro</span>
        </Link>

        <div className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#precios" className="hover:text-blue-600">Precios</a>
          <a href="#reservar" className="hover:text-blue-600">Reservar</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </div>

        <a
          href="#reservar"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Reserva ahora
        </a>
      </nav>
    </header>
  )
}
