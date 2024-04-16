"use server";

import { AuthError } from "next-auth";
import { signIn } from "@@/auth";
import { z } from "zod";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Project } from "@/app/models/project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const ProjectFormSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(100),
  subtitle: z.string().min(3).max(100),
  description: z.string().max(500),
  longDescription: z.string().max(1000),
  imageSrc: z.string().url(),
  stack: z.string().min(1),
});

const UpdateProject = ProjectFormSchema.omit({ id: true });
const CreateProject = ProjectFormSchema.omit({ id: true });

export type State = {
  errors?: {
    title?: string[];
    subtitle?: string[];
    description?: string[];
    longDescription?: string[];
    imageSrc?: string[];
    stack?: string[];
  };
  message?: string | null;
};

export async function updateProject(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateProject.safeParse({
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    description: formData.get("description"),
    longDescription: formData.get("longDescription"),
    imageSrc: formData.get("imageSrc"),
    stack: formData.get("stack"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to update project",
    };
  }

  const { title, subtitle, description, longDescription, imageSrc, stack } = validatedFields.data;

  try {
    connectToDatabase();
    await Project.findByIdAndUpdate(id, {
      title: title,
      subtitle: subtitle,
      description: description,
      longDescription: longDescription,
      imageSrc: imageSrc,
      stack: stack,
    });
  } catch (err) {
    return { message: "Database error: Failed to update project." };
  }

  revalidatePath("/admin/dashboard/projects");
  redirect("/admin/dashboard/projects");
}

export async function deleteProject(id: string) {
  try {
    connectToDatabase();
    await Project.findByIdAndDelete(id);
    revalidatePath("/admin/dashboard/projects");
  } catch (err) {
    console.error("Database error: Failed to delete project", err);
  }
}

export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = CreateProject.safeParse({
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    description: formData.get("description"),
    longDescription: formData.get("longDescription"),
    imageSrc: formData.get("imageSrc"),
    stack: formData.get("stack"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create project",
    };
  }

  const newProject = new Project({
    title: validatedFields.data.title,
    subtitle: validatedFields.data.subtitle,
    description: validatedFields.data.description,
    longDescription: validatedFields.data.longDescription,
    imageSrc: validatedFields.data.imageSrc,
    stack: validatedFields.data.stack,
  });

  try {
    connectToDatabase();
    await newProject.save();
  } catch (err) {
    console.error("Database error: Failed to create project", err);
  }

  revalidatePath("/admin/dashboard/projects");
  redirect("/admin/dashboard/projects");
}
