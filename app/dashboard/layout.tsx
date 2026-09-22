import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SideNav from "@/app/ui/dashboard/sidenav";

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Confirm there is an user currently logged in
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
