import ProjectsTable from "@/app/ui/projects/projects-table";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="w-full items-center flex flex-col">
      <Link href={`/admin/dashboard/projects/create`} className="bg-blue-500 text-white rounded-md px-3 py-1 drop-shadow-md">
        Add Project
      </Link>
      <Suspense>
        <ProjectsTable />
      </Suspense>
    </div>
  );
}
