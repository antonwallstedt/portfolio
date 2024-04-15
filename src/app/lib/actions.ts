"use server";

import { AuthError } from "next-auth";
import { signIn } from "@@/auth";
import { z } from "zod";
import { connectToDatabase } from "./mongodb";
import { Project } from "../models/Project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProjectFormSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: "Please enter a title.",
  }),
  subtitle: z.string({
    invalid_type_error: "Please enter a subtitle",
  }),
  description: z.string({
    invalid_type_error: "Please enter a description.",
  }),
  longDescription: z.string({
    invalid_type_error: "Please enter a long description.",
  }),
  imageSrc: z.string({
    invalid_type_error: "Please enter an image source.",
  }),
  stack: z.string({
    invalid_type_error: "Please enter the stack.",
  }),
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
  };
  message?: string | null;
};

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
