import { IconType } from "react-icons";
import {
  SiAngular,
  SiAntdesign,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export enum Tech {
  angular = "Angular",
  html = "HTML",
  css = "CSS",
  javascript = "JavaScript",
  bootstrap = "Bootstrap",
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

const t = Tech;

export const techIcons: {
  [key in Tech]: { icon?: IconType; color?: string };
} = {
  [t.angular]: { color: "#DD0031", icon: SiAngular },
  [t.bootstrap]: { color: "#7952B3", icon: SiBootstrap },
  [t.antd]: { color: "#0170FE", icon: SiAntdesign },
  [t.html]: { color: "#E34F26", icon: SiHtml5 },
  [t.css]: { color: "#1572B6", icon: SiCss3 },
  [t.javascript]: { color: "#F7DF1E", icon: SiJavascript },
  [t.chakarui]: { color: "#319795", icon: SiChakraui },
  [t.expo]: { color: "#000020", icon: SiExpo },
  [t.expressjs]: { color: "#000000", icon: SiExpress },
  [t.fusejs]: {},
  [t.mongodb]: { color: "#47A248", icon: SiMongodb },
  [t.nextjs]: { color: "#000000", icon: SiNextdotjs },
  [t.nodejs]: { color: "#339933", icon: SiNodedotjs },
  [t.python]: { color: "#3776AB", icon: SiPython },
  [t.reactjs]: { color: "#61DAFB", icon: SiReact },
  [t.reactnative]: { color: "#61DAFB", icon: SiReact },
  [t.rneui]: {},
  [t.tailwindcss]: { color: "#06B6D4", icon: SiTailwindcss },
  [t.typescript]: { color: "#3178C6", icon: SiTypescript },
};
