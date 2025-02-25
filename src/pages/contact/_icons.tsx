import Link from "@docusaurus/Link";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const ICON_TEXT_SPACE = "0.7em";
const ICON_SIZE = 25;

interface Service {
  name: string;
  icon: typeof FaLinkedin;
  color: string;
  url: string;
}

function ServiceContainer({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ marginY: "0.5em", display: "inline-block" }}>{children}</Box>
  );
}

function ServiceNameAndUrl({ name, url }: { name: string; url: string }) {
  return (
    <>
      <Box
        component={"span"}
        sx={{ marginInlineStart: ICON_TEXT_SPACE, fontWeight: "bold" }}
      >
        {name}
      </Box>{" "}
      <Link to={url}>{url}</Link>
    </>
  );
}

function Layout({ data }: { data: Service }) {
  return (
    <ServiceContainer>
      {data.icon({
        color: data.color,
        fontSize: ICON_SIZE,
        style: { marginBottom: "-0.260em" },
      })}
      <ServiceNameAndUrl name={data.name} url={data.url} />
    </ServiceContainer>
  );
}

const Services = {
  LinkedIn: (
    <Layout
      data={{
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/c-shubh/",
        icon: FaLinkedin,
        color: "#0A66C2",
      }}
    />
  ),
  GitHub: (
    <Layout
      data={{
        name: "GitHub",
        url: "https://github.com/c-shubh/",
        icon: FaGithub,
        color: "",
      }}
    />
  ),
  HackerRank: (
    <Layout
      data={{
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/shubh143560",
        icon: FaHackerrank,
        color: "#00EA64",
      }}
    />
  ),
  X: (
    <Layout
      data={{
        name: "X",
        url: "https://x.com/c_shubh_",
        icon: FaSquareXTwitter,
        color: "",
      }}
    />
  ),
  LeetCode: (
    <ServiceContainer>
      <Box
        component={"img"}
        mb={"-0.260em"}
        width={ICON_SIZE}
        src="/img/leetcode.colored.svg"
      />
      <ServiceNameAndUrl
        name="LeetCode"
        url="https://leetcode.com/u/c-shubh/"
      />
    </ServiceContainer>
  ),
  Codeforces: (
    <ServiceContainer>
      <Box
        component={"img"}
        mb={"-0.260em"}
        width={ICON_SIZE}
        src="/img/codeforces.colored.svg"
      ></Box>
      <ServiceNameAndUrl
        name="Codeforces"
        url="https://codeforces.com/profile/shubh143560"
      />
    </ServiceContainer>
  ),
  Instagram: (
    <ServiceContainer>
      <Box
        component={"img"}
        mb={"-0.380em"}
        width={ICON_SIZE}
        src="/img/instagram.colored.svg"
      ></Box>
      <ServiceNameAndUrl
        name="Instagram"
        url="https://www.instagram.com/c_shubh_/"
      />
    </ServiceContainer>
  ),
};

export function Profiles() {
  const data = [
    Services.GitHub,
    Services.X,
    Services.LinkedIn,
    Services.Instagram,
    Services.HackerRank,
    Services.LeetCode,
    Services.Codeforces,
  ];

  return (
    <Box component={"ul"} sx={{ listStyleType: "none", padding: 0 }}>
      {data.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </Box>
  );
}
