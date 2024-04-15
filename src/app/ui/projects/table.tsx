import { fetchProjects } from "@/app/lib/data";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function ProjectsTable() {
  const projects = await fetchProjects();
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center w-full p-5 rounded-md">
      {projects?.map((project) => (
        <div key={project.id} className="flex m-5 bg-neutral-100 rounded-md p-3 drop-shadow-md w-[50%]">
          <img src={project.imageSrc} width={200} height={200} className="rounded-md" />
          <div className="ml-5 relative drop-shadow-sm">
            <h1 className="text-xl font-medium mb-2">{project.title}</h1>
            <p className="text-lg mb-4">{project.subtitle}</p>
            <p className="mb-4">{project.description}</p>
            <Link href={`/admin/dashboard/projects/${project.id}/edit`} className="bg-neutral-200 px-3 py-1 rounded-md flex items-center text-sm absolute bottom-0">
              Edit <Cog6ToothIcon width={15} className="ml-2" />
            </Link>
            {/* <button className="bg-neutral-200 px-3 py-1 rounded-md flex items-center text-sm absolute bottom-0"></button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
