import mongoose, { Document, Model } from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  imageSrc: String,
  description: String,
  longDescription: String,
  stack: [String],
});

type ProjectDocumentType = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  longDescription: string;
  stack: [string];
};

interface ProjectDocument extends Document {
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  longDescription: string;
  stack: [string];
}

type ProjectModelType = Model<ProjectDocument>;

const Project: ProjectModelType = mongoose.models.Project || mongoose.model<ProjectDocument>("Project", projectSchema);

export { Project, type ProjectDocument, type ProjectDocumentType };
