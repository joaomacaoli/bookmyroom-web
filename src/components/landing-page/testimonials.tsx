import React from 'react'

export default function TestimonialsLandingPage() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">O que nossos usuários dizem</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              "O Book My Room mudou a forma como gerenciamos nossas salas de reunião. Agora tudo é mais organizado e
              eficiente!"
            </p>
            <p className="mt-4 font-bold text-gray-800">— João Silva</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              "Adoro a facilidade de uso e as notificações que me ajudam a não esquecer dos meus agendamentos."
            </p>
            <p className="mt-4 font-bold text-gray-800">— Maria Souza</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              "A plataforma é incrível! Nunca mais tivemos problemas com salas duplicadas ou agendamentos perdidos."
            </p>
            <p className="mt-4 font-bold text-gray-800">— Carlos Oliveira</p>
          </div>
        </div>
      </div>
    </section>
  )
}
