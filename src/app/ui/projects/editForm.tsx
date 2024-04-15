"use client";

import { updateProject } from "@/app/lib/actions";
import { ProjectDocument, ProjectDocumentType } from "@/app/models/Project";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Button } from "../button";

export default function EditProjectForm({ project }: { project: ProjectDocumentType }) {
  const initialState = { message: null, errors: {} };
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [state, dispatch] = useFormState(updateProjectWithId, initialState);

  return (
    <form action={dispatch} className="w-[50%]">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Title</h1>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={project.title}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Subtitle</h1>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            defaultValue={project.subtitle}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Description</h1>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Long Description</h1>
          <textarea
            id="longDescription"
            name="longDescription"
            defaultValue={project.longDescription}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 h-40"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Stack</h1>
          <input
            id="stack"
            name="stack"
            type="text"
            defaultValue={project.stack}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2 pl-2">Image</h1>
          <input
            id="imageSrc"
            name="imageSrc"
            type="text"
            defaultValue={project.imageSrc}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link href="/admin/dashboard/projects" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
