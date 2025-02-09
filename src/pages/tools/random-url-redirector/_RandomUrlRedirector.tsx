import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Stack, TextField } from "@mui/material";
import LZString from "lz-string";
import { useState } from "react";
import { copyToClipboard, successToast } from "../../../utils";

// part of implementation is in static\tools\random-url-redirector\random.html file

export default function RandomUrlRedirector() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleTextChange = (text: string) => {
    const urls = text.split("\n").filter((url) => !!url);
    if (urls.length > 0) {
      const encoded = LZString.compressToEncodedURIComponent(
        JSON.stringify(urls)
      );
      let baseUrl = window.location.href;
      if (baseUrl.charAt(baseUrl.length - 1) !== "/") baseUrl += "/";
      baseUrl += "random.html#";
      setOutput(baseUrl + encoded);
    } else {
      setOutput("");
    }
    setText(text);
  };

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          <TextField
            label="Enter URLs"
            multiline
            maxRows={10}
            value={text}
            onChange={(e) => {
              handleTextChange(e.target.value);
            }}
            placeholder="Enter URLs (one per line)"
            autoFocus
          />
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <h3>Output</h3>
            <IconButton
              size="medium"
              onClick={async () => {
                if (await copyToClipboard(output)) {
                  successToast("Copied text.");
                }
              }}
            >
              <ContentCopyIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          {output && (
            <Link href={output} exact>
              {output}
            </Link>
          )}
        </Stack>
      )}
    </BrowserOnly>
  );
}
