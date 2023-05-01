import { Tech } from "../data/tech";

export interface Project {
  title: string;
  liveUrl?: string;
  srcUrl?: string;
  description: string;
  startDate: string;
  builtWith: Tech[];
}
