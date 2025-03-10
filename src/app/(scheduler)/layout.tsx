import Sidebar from "@/components/sidebar";
import { ScheduleProvider } from "@/contexts/schedule-context";

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScheduleProvider>
      {/* <Sidebar /> */}
      {children}
    </ScheduleProvider>
  );
}
