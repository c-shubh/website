export enum Tech {
  angular = "Angular",
  antd = "Ant Design",
  chakarui = "Chakra UI",
  expo = "Expo",
  expressjs = "Express.js",
  fusejs = "Fuse.js",
  mongodb = "MongoDB",
  nextjs = "Next.js",
  nodejs = "Node.js",
  python = "Python",
  reactjs = "React.js",
  reactnative = "React Native",
  rneui = "React Native Elements",
  tailwindcss = "Tailwind CSS",
  typescript = "TypeScript",
}

export interface Project {
  title: string;
  liveUrl?: string;
  srcUrl?: string;
  description: string;
  startDate: string;
  builtWith: Tech[];
}
