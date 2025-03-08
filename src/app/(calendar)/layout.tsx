export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`mx-auto grid min-h-screen w-full
        max-w-[1600px] grid-rows-app gap-5 p-8`}
    >
      {children}
    </div>
  );
}
