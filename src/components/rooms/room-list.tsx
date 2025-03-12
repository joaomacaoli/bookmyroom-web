import { RoomListProps } from "@/types/room";
import RoomItem from "./room-item";

export default function RoomList({ rooms }: RoomListProps) {
  return (
    <div className="space-y-4">
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomItem key={room.id} {...room} />)
      ) : (
        <p className="text-gray-600 text-center">Nenhuma sala cadastrada.</p>
      )}
    </div>
  );
}
