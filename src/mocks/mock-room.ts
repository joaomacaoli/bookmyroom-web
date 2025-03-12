import { Room } from "@/types/room";
import { v4 as uuidv4 } from "uuid";

export let mockRooms: Room[] = [
  {
    id: uuidv4(),
    description: "Sala de Reunião A",
    floor: "1º Andar",
    capacity: 10,
    status: "active",
  },
  {
    id: uuidv4(),
    description: "Sala de Treinamento",
    floor: "2º Andar",
    capacity: 20,
    status: "inactive",
  },
  {
    id: uuidv4(),
    description: "Sala de Conferência",
    floor: "3º Andar",
    capacity: 50,
    status: "maintenance",
  },
  {
    id: uuidv4(),
    description: "Auditório",
    floor: "Térreo",
    capacity: 100,
    status: "inactive",
  },
  {
    id: uuidv4(),
    description: "Auditório",
    floor: "Térreo",
    capacity: 200,
    status: "active",
  },
];

export const addRoom = (room: Omit<Room, "id">) => {
  const newRoom = {
    id: uuidv4(),
    ...room
  };

  mockRooms.push(newRoom);
  console.log(mockRooms);
};

export const editRoom = (id: string, updatedRoom: Omit<Room, "id">) => {
  mockRooms = mockRooms.map((room) =>
    room.id === id ? { ...room, ...updatedRoom } : room
  );
};

export const deleteRoom = (id: string) => {
  mockRooms = mockRooms.filter((room) => room.id !== id);
};
