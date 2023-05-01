export enum Tech {
  nodejs = "Node.js",
  expressjs = "Express.js",
}

export interface Project {
  title: string;
  liveUrl?: string;
  srcUrl?: string;
  description: string;
  startDate: string;
  builtWith: Tech[];
}
