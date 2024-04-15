import { fetchProject } from "@/app/lib/data";
import { ProjectDocumentType } from "@/app/models/project";
import Form from "@/app/ui/projects/edit-form";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Project",
};

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await fetchProject(id).then((project) => {
    const { _id, ...projectPojo } = project?.toObject() || {};
    return { ...projectPojo, id: _id?.toString() } as ProjectDocumentType;
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center">
      <Form project={project} />
    </main>
  );
}
