export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Book My Room</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:underline">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Salas
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Agendamentos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
