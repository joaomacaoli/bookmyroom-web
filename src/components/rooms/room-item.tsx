import { Room } from "@/app/types/room";

export default function RoomItem({
  id, description, floor, capacity, status
}: Room) {

  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-gray-500",
    maintenance: "bg-yellow-500",
  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{description}</h2>
        <p className="text-sm text-gray-600">Andar: {floor}</p>
        <p className="text-sm text-gray-600">Capacidade: {capacity} pessoas</p>
      </div>
      <span className={`px-3 py-1 rounded text-white text-sm ${statusColors[status]}`}>
        {status === "active" ? "Ativa" : status === "inactive" ? "Inativa" : "Manutenção"}
      </span>
    </div>
  );
}
