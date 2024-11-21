import BrowserOnly from "@docusaurus/BrowserOnly";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import slugify from "@sindresorhus/slugify";
import { copyToClipboard, successToast } from "@site/src/utils";
import { useState } from "react";

export default function Slugify() {
  const [output, setOutput] = useState<string[]>([]);

  const handleChange: TextFieldProps["onChange"] = (event) => {
    const inputText = event.target.value.trim();
    if (!inputText) setOutput([]);
    else {
      const inputLines = inputText.split("\n");
      const slugifiedLines = inputLines.map((line: string) => slugify(line));
      setOutput(slugifiedLines);
    }
  };

  return (
    <BrowserOnly>
      {() => (
        <Box sx={{ width: "100%", mt: 2 }}>
          <TextField
            label="Enter text here"
            variant="outlined"
            multiline
            minRows={1}
            fullWidth
            onChange={handleChange}
            autoFocus
          />
          <Box sx={{ mt: 2 }}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <h3>Output</h3>
              <IconButton
                size="medium"
                onClick={async () => {
                  if (await copyToClipboard(output.join("\n"))) {
                    successToast("Copied text.");
                  }
                }}
              >
                <ContentCopyIcon fontSize="inherit" />
              </IconButton>
            </Stack>
            <ul>
              {output.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </Box>
        </Box>
      )}
    </BrowserOnly>
  );
}
