"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

import RoomList from "@/components/rooms/room-list";
import { mockRooms } from "@/mocks/mock-room";

export default function RoomsPage() {
  const [rooms, setRooms] = useState<null | typeof mockRooms>(null);

  useEffect(() => {
    setRooms([...mockRooms]);
  }, [mockRooms.length]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Salas</h1>
        <Link href="/rooms/add" className="bg-blue-600 text-white px-4 py-2 rounded">
          <Plus />
        </Link>
      </div>

      {rooms ? <RoomList rooms={rooms} /> : <p>Carregando...</p>}
    </div>
  );
}
