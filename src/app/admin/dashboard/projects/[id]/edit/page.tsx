import { Metadata } from "next";
import Form from "@/app/ui/projects/editForm";
import { fetchProject } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { ProjectDocumentType } from "@/app/models/Project";

export const metadata: Metadata = {
  title: "Edit Project",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await fetchProject(id).then((project) => {
    const projectPojo = project?.toObject();
    return { ...projectPojo, id: projectPojo?._id.toString() } as ProjectDocumentType;
  });
  console.log(project);
  if (!project) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center">
      <Form project={project} />
    </main>
  );
}
