import Link from 'next/link'
import React from 'react'

export default function HeroLandingPage() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Agende salas de forma rápida e eficiente</h2>
        <p className="mt-4 text-gray-600">
          O Book My Room é a ferramenta perfeita para gerenciar e agendar salas de reunião, auditórios e espaços
          compartilhados. Simplifique sua rotina e evite conflitos de agendamento com nossa plataforma intuitiva.
        </p>
        <div className="mt-8">
          <Link
            href="/rooms"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/rooms"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </section>
  )
}
