import Box from "@mui/material/Box";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

interface Service {
  name: string;
  icon: typeof FaLinkedin;
  color: string;
}

function Layout({ data }: { data: Service }) {
  return (
    <Box
      sx={{
        marginY: "0.5em",
        display: "inline-block",
      }}
    >
      {data.icon({
        color: data.color,
        fontSize: 25,
        style: { marginBottom: "-0.210em" },
      })}
      <Box
        component={"span"}
        sx={{
          marginInlineStart: "0.4em",
        }}
      >
        {data.name}
      </Box>
    </Box>
  );
}

export const Services = {
  LinkedIn: (
    <Layout data={{ name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2" }} />
  ),
  GitHub: <Layout data={{ name: "GitHub", icon: FaGithub, color: "" }} />,
  HackerRank: (
    <Layout
      data={{ name: "HackerRank", icon: FaHackerrank, color: "#00EA64" }}
    />
  ),
};
