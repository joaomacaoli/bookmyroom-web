import { Room } from "@/types/room";
import RoomList from "@/components/rooms/room-list";
import { Plus } from "lucide-react";
import Link from "next/link";

const mockRooms: Room[] = [
  {
    id: "1",
    description: "Sala de Reunião A",
    floor: "1º Andar",
    capacity: 10,
    status: "active",
  },
  {
    id: "2",
    description: "Sala de Treinamento",
    floor: "2º Andar",
    capacity: 20,
    status: "inactive",
  },
  {
    id: "3",
    description: "Sala de Conferência",
    floor: "3º Andar",
    capacity: 50,
    status: "maintenance",
  },
  {
    id: "4",
    description: "Auditório",
    floor: "Térreo",
    capacity: 100,
    status: "inactive",
  },
];

export default function RoomsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Salas</h1>
        <Link href="/rooms/add" className="bg-blue-600 text-white px-4 py-2 rounded">
          <Plus />
        </Link>
      </div>

      <RoomList rooms={mockRooms} />
    </div>
  );
}
