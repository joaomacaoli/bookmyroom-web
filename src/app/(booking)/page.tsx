import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Book My Room</h1>
      <p className="text-lg text-gray-700">Gerencie salas e agendamentos de forma simples e eficiente.</p>

      <div className="mt-6 flex gap-4">
        <Link href="/rooms">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Ver Salas
          </button>
        </Link>
        <Link href="/appointments">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            Ver Agendamentos
          </button>
        </Link>
      </div>
    </div>
  );
}
