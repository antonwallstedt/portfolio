import { fetchProjects } from "@/app/lib/data";
import ProjectsTable from "@/app/ui/projects/table";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Page() {
  return (
    <div className="w-full items-center flex flex-col">
      <Link href={`/admin/dashboard/projects/create`} className="bg-primary-container rounded-md px-3 py-1">
        Add Project
      </Link>
      <Suspense>
        <ProjectsTable />
      </Suspense>
    </div>
  );
}
