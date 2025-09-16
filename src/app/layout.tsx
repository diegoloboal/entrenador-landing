// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Entrenador Personal | Reservas",
  description: "Entrenamientos personalizados. Reserva tu horario.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased`}>
        {/* fondo decorativo */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40"
             aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full
                          bg-gradient-to-br from-blue-200 via-indigo-200 to-violet-200 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  )
}
