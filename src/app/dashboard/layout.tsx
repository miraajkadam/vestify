import { SideNavbar } from "@/components/dashboard/SideNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
