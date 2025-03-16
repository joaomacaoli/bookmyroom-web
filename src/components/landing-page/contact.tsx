import React from 'react'

export default function ContactLandingPage() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Entre em Contato</h2>
        <p className="mt-4">Tem alguma dúvida ou precisa de suporte? Estamos aqui para ajudar!</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none"
          />
          <textarea
            placeholder="Sua mensagem"
            className="w-full mt-4 px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-300 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
