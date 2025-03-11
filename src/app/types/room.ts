export type RoomStatus = "active" | "inactive" | "maintenance";

export type Room = {
  id: string;
  description: string;
  floor: string;
  capacity: number;
  status: RoomStatus;
};

export type RoomListProps = {
  rooms: Room[];
};
