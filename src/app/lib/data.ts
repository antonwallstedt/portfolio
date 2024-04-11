import { connectToDatabase } from "./mongodb";
import { Project } from "@/app/models/Project";

export async function fetchProjects() {
  try {
    connectToDatabase();
    const projects = Project.find();
    return projects;
  } catch (err) {}
}
