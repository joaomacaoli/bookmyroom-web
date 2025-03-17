import Calendar from "@/components/appointments/calendar";
import UnderConstruction from "@/components/common/under-construction";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <h1 className="text-2xl font-bold mb-6">Agenda de salas</h1>
      <Calendar />
    </div>
  )
}
