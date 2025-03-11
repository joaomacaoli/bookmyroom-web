export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Salas
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Agendamentos
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
