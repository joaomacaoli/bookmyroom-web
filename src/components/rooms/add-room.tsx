"use client";

import { RoomForm } from "@/components/rooms/room-form";
import FormBackButton from "../commom/form-back-button";

export default function AddRoomPage() {
  const handleSubmit = (data: any) => {
    console.log("Nova sala:", data);
    // todo API
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-items-start items-center gap-3">
        <FormBackButton href="rooms" />

        <h1 className="text-3xl font-bold flex items-center">
          Adicionar sala
        </h1>
      </div>

      <RoomForm onSubmit={handleSubmit} />
    </div>
  );
}
