import Link from "next/link";

const menu = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Salas", href: "/rooms" },
  { title: "Agendamentos", href: "/appointments" },
]

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-4">
          {menu.map(menu => (
            <li key={menu.title}>
              <Link href={menu.href} className="block p-2 rounded hover:bg-gray-700">
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
