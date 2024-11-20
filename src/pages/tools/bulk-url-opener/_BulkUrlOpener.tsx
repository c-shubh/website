import BrowserOnly from "@docusaurus/BrowserOnly";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BulkUrlOpener() {
  const [text, setText] = useState("");

  const textToUrls = () => {
    return text.split("\n");
  };

  const openUrls = () => {
    const urls = textToUrls();
    for (const url of urls) {
      if (!!url) window.open(url);
    }
  };

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          {
            // TODO: use uiwjs/react-codemirror for line numbes later
          }
          <TextField
            label="Paste URLs"
            multiline
            maxRows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste URLs"
            autoFocus
          />
          <p>
            Remember to <strong>allow popups</strong> from this site in your
            browser.
          </p>
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            onClick={openUrls}
          >
            Open all URLs
          </Button>
        </Stack>
      )}
    </BrowserOnly>
  );
}
