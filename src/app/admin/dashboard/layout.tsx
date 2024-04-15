import NavBar from "@/app/ui/home/navbar";
import SideNav from "@/app/ui/home/sidenav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <div className="flex justify-center bg-slate-200 w-full">
        <NavBar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
