"use client";

import { Room } from "@/app/types/room";
import { useState } from "react";

interface RoomFormProps {
  initialData?: Partial<Room>; // Partial permite que os campos sejam opcionais
  onSubmit: (data: Omit<Room, "id">) => void;
}

export function RoomForm({ initialData, onSubmit }: RoomFormProps) {
  const [description, setDescription] = useState(initialData?.description || "");
  const [floor, setFloor] = useState(initialData?.floor || "");
  const [capacity, setCapacity] = useState(initialData?.capacity || 0);
  const [status, setStatus] = useState(initialData?.status || "active");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ description, floor, capacity, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg">
      <div>
        <label className="block font-semibold">Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Andar</label>
        <input
          type="text"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Capacidade</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "active" | "inactive" | "maintenance")}
          className="w-full p-2 border rounded"
        >
          <option value="active">Ativa</option>
          <option value="inactive">Inativa</option>
          <option value="maintenance">Manutenção</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        {initialData ? "Atualizar Sala" : "Adicionar Sala"}
      </button>
    </form>
  );
}
