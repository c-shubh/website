import BrowserOnly from "@docusaurus/BrowserOnly";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { errorToast } from "@site/src/utils";
import React, { useState } from "react";

function countCharWordLine(text: string) {
  if (!text) {
    return { character: 0, word: 0, line: 0 };
  }
  const charCount = text.length;
  let wordCount = 0;
  let lineCount = 1;
  let inWord = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "\n") lineCount++;
    const isWhitespace =
      text[i] === " " || text[i] === "\n" || text[i] === "\t";
    if (!isWhitespace && !inWord) {
      // Starting a new word
      wordCount++;
      inWord = true;
    } else if (isWhitespace) {
      // Ending a word
      inWord = false;
    }
  }
  return {
    character: charCount,
    word: wordCount,
    line: lineCount,
  };
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function WordCount() {
  const [count, setCount] = useState<{
    character: number;
    word: number;
    line: number;
  }>({ character: 0, word: 0, line: 0 });
  const textRef = React.useRef<HTMLTextAreaElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      textRef.current!.value = content;
      setCount(countCharWordLine(content));
    };
    reader.onerror = () => {
      errorToast("Error reading file. Please try again.");
    };
    reader.readAsText(file);
  };

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={1}>
          <TextField
            inputRef={textRef}
            label="Enter text here"
            variant="outlined"
            multiline
            minRows={1}
            maxRows={20}
            onChange={(e) => setCount(countCharWordLine(e.target.value))}
            fullWidth
            autoFocus
          />
          <Box display={"flex"} justifyContent={"center"}>
            or
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<FileOpenIcon />}
            >
              Open file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </Box>
          <Stack>
            <h3>Output</h3>
            <pre>
              Character count: {count.character}
              <br />
              Word count: {"     "}
              {count.word}
              <br />
              Line count: {"     "}
              {count.line}
            </pre>
          </Stack>
        </Stack>
      )}
    </BrowserOnly>
  );
}
