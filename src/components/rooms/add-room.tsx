"use client";

import { RoomForm } from "@/components/rooms/room-form";
import FormBackButton from "../commom/form-back-button";
import { addRoom } from "@/mocks/mock-room";
import { useRouter } from "next/navigation";

export default function AddRoomPage() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    addRoom(data);
    // todo API
    router.push("/rooms");
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
