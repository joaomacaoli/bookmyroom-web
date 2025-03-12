import React from 'react'

export default function FeaturesLandingPage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Por que escolher o Book My Room?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Agendamento Simples</h3>
            <p className="mt-4 text-gray-600">
              Agende salas em poucos cliques, com uma interface amigável e fácil de usar.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Disponibilidade em Tempo Real</h3>
            <p className="mt-4 text-gray-600">
              Veja a disponibilidade das salas em tempo real e evite conflitos de agendamento.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Notificações Inteligentes</h3>
            <p className="mt-4 text-gray-600">
              Receba lembretes e notificações sobre seus agendamentos diretamente no seu e-mail ou celular.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
