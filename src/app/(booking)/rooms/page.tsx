import { Room } from "@/app/types/room";
import RoomList from "@/components/rooms/room-list";

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
];

export default function RoomsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Salas</h1>
      <RoomList rooms={mockRooms} />
    </div>
  );
}
