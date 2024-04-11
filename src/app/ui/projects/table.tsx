import { fetchProjects } from "@/app/lib/data";
import Image from "next/image";

export default async function ProjectsTable() {
  const projects = await fetchProjects();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-surface-variant p-2 md:pt-0">
          <table className="hidden min-w-full bg-surface-variant md:table">
            <thead className="rounded-lg text-left text-md">
              <tr>
                <th scope="col" />
                <th scope="col">Title</th>
                <th scope="col">Subtitle</th>
                <th scope="col">Stack</th>
                <th scope="col">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-surface-variant">
              {projects?.map((project) => (
                <tr
                  key={project.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap p-2">
                    <img src={project.imageSrc} className="rounded-md" width={100} height={100} alt={`${project.title}'s profile picture`} />{" "}
                  </td>
                  <td className="whitespace-nowrap py-3">{project.title}</td>
                  <td className="whitespace-nowrap py-3">{project.subtitle}</td>
                  <td className="whitespace-nowrap py-3">
                    {project.stack.map((tech, i) => (
                      <span key={i}>{tech} </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
