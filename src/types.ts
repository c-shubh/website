import dayjs from "dayjs";

export enum Tech {
  nodejs = "Node.js",
  expressjs = "Express.js",
}

export interface Project {
  title: string;
  liveUrl?: string;
  srcUrl?: string;
  description: string;
  startDate: dayjs.Dayjs;
  builtWith: Tech[];
}
