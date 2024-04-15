import { connectToDatabase } from "./mongodb";
import { Project } from "@/app/models/Project";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProjects() {
  noStore();
  try {
    connectToDatabase();
    const projects = Project.find();
    return projects;
  } catch (err) {}
}

export async function fetchProject(id: string) {
  noStore();
  try {
    connectToDatabase();
    const project = Project.findById(id);
    return project;
  } catch (err) {}
}
