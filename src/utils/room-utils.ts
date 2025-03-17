import { mockRooms } from "@/mocks/mock-room";
import { ResourceDetails } from "@syncfusion/ej2-react-schedule";

export const getRoomName = (props: ResourceDetails) => {
  const room = mockRooms.find((room) => room.id === props.resourceData.id);
  return room ? room.description : "Desconhecido";
};

export const getRoomType = (props: ResourceDetails) => {
  const room = mockRooms.find((room) => room.id === props.resourceData.id);
  return room ? room.floor : "Desconhecido";
};

export const getRoomCapacity = (props: ResourceDetails) => {
  const room = mockRooms.find((room) => room.id === props.resourceData.id);
  return room ? room.capacity : "N/A";
};
