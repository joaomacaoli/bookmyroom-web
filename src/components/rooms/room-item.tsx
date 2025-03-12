import { Room } from "@/types/room";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

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
        <p className={`text-sm font-semibold
          ${status === "active"
            ? "text-green-600" : status === "inactive"
              ? "text-gray-500" : "text-yellow-500"}`
        }>
          {status === "active" ? "Ativa" : status === "inactive" ? "Inativa" : "Em Manutenção"}
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          href={`/rooms/edit?id=${id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          <Pencil />
        </Link>

        <Link
          href={`#`}
          // href={`/rooms/edit?id=${id}`}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          <Trash2 />
        </Link>
      </div>
    </div>
  );
}
