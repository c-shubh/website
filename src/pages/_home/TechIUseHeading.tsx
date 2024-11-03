import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function TechIUseHeading() {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        alignItems: "center",
        marginBottom: "var(--ifm-heading-margin-bottom)",
      }}
    >
      <Box component={"h2"}>Tech I use</Box>
      <Box
        component={"img"}
        src="/img/computer.gif"
        alt="Computer gif"
        sx={{
          width: 40,
        }}
      />
    </Stack>
  );
}
