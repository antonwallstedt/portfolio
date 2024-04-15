import { unstable_noStore as noStore } from "next/cache";
import { connectToDatabase } from "./mongodb";
import { Project } from "../models/project";

export async function fetchProjects() {
  noStore();
  try {
    await connectToDatabase();
    const projects = Project.find();
    return projects;
  } catch (err) {
    console.error("could not find projects", err);
  }
}

export async function fetchProject(id: string) {
  noStore();
  try {
    await connectToDatabase();
    const project = Project.findById(id);
    return project;
  } catch (err) {
    console.error("could not find project", err);
  }
}
