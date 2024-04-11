import { fetchProjects } from "@/app/lib/data";
import ProjectsTable from "@/app/ui/projects/table";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <Suspense>
        <ProjectsTable />
      </Suspense>
    </div>
  );
}
