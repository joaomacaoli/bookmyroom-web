import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
