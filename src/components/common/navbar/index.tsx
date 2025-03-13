import Link from "next/link";

const menu = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Salas", href: "/rooms" },
  { title: "Agendamentos", href: "/appointments" },
  { title: "Logout", href: "/" },
]

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">Book My Room</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          {menu.map(menu => (
            <li key={menu.title}>
              <Link href={menu.href}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
