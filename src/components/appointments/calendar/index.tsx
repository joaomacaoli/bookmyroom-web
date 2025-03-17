"use client";

import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  TimelineViews,
  Inject,
  ResourcesDirective,
  ResourceDirective,
  ResourceDetails,
  EventRenderedArgs
} from "@syncfusion/ej2-react-schedule";
import { mockAppointments } from "@/mocks/mock-appointments";
import { mockRooms } from "@/mocks/mock-room";
import { getRoomCapacity, getRoomName, getRoomType } from "@/utils/room-utils";

const Calendar = () => {
  const resourceHeaderTemplate = (props: ResourceDetails) => {
    return (
      <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg shadow-md">
        <div className="font-bold text-lg text-gray-700">{getRoomName(props)}</div>
        <div className="text-sm text-gray-500">{getRoomType(props)}</div>
        <div className="text-xs text-gray-400">Capacidade: {getRoomCapacity(props)}</div>
      </div>
    );
  };

  const onEventRendered = (args: EventRenderedArgs): void => {
    const data = args.data as Record<string, any>;
    const eventElement = args.element as HTMLElement;

    eventElement.classList.add(
      "border-l-4",
      "rounded-md",
      "p-2",
      "text-white",
      "shadow-md"
    );

    const room = mockRooms.find((r) => r.id === data.RoomId);
    if (room) {
      eventElement.style.backgroundColor = room.status === "active" ? "#4CAF50" : "#FF9800";
      eventElement.style.borderColor = room.status === "active" ? "#2E7D32" : "#F57C00";
    } else {
      eventElement.style.backgroundColor = "#9E9E9E";
      eventElement.style.borderColor = "#616161";
    }
  };

  const onActionComplete = (args: any) => {
    // console.log("🚀 onActionComplete chamado:", args);

    if (args.requestType === "eventCreated") {
      const newEvent = args.addedRecords?.[0];
      console.log("✅ Novo Agendamento Criado:", newEvent);
    }

    if (args.requestType === "eventChanged") {
      console.log("✏️ Evento Editado:", args.changedRecords[0]);
    }
  };

  return (
    <div className="flex justify-center">
      <ScheduleComponent
        width="80%"
        height="650px"
        selectedDate={new Date()}
        eventSettings={{ dataSource: mockAppointments }}
        group={{ resources: ["MeetingRoom"] }}
        resourceHeaderTemplate={resourceHeaderTemplate}
        eventRendered={onEventRendered}
        actionComplete={onActionComplete}
        workHours={{ start: '08:00', end: '18:00' }}
        timeScale={{ interval: 60, slotCount: 1 }}
      >

        <ResourcesDirective>
          <ResourceDirective
            field="RoomId"
            title="Sala"
            name="MeetingRoom"
            allowMultiple={false}
            dataSource={mockRooms}
            textField="description"
            idField="id"
            colorField="color"
          />
        </ResourcesDirective>

        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="TimelineWeek" />
        </ViewsDirective>
        <Inject services={[TimelineViews]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
