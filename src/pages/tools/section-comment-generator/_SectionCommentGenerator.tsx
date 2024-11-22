import BrowserOnly from "@docusaurus/BrowserOnly";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { copyToClipboard, successToast } from "@site/src/utils";
import { useEffect, useState } from "react";

const styles = {
  C: {
    start: "/*",
    end: "*/",
  },
  Python: {
    start: "#",
    end: "#",
  },
};

function generate(
  text: string,
  style: "C" | "Python",
  lineLength: number,
  indentationSize: number
) {
  if (!text) {
    text = "Hey there!";
  }

  const open = styles[style].start;
  const gapAfterOpen = " ";
  const gapBeforeText = " ";
  const gapAfterText = " ";
  const gapBeforeClose = " ";
  const close = styles[style].end;
  const repeatChar = "-";

  const leftBuilder = open + gapAfterOpen;
  const midBuilder = gapBeforeText + text + gapAfterText;
  const rightBuilder = gapBeforeClose + close;

  const unusedLength =
    lineLength -
    indentationSize -
    leftBuilder.length -
    midBuilder.length -
    rightBuilder.length;

  const getLeftPadding = (length: number, char: string): string =>
    length > 0 ? char.repeat(Math.floor(length / 2)) : "";

  const getRightPadding = (length: number, char: string): string =>
    length > 0 ? char.repeat(Math.ceil(length / 2)) : "";

  return (
    leftBuilder +
    getLeftPadding(unusedLength, repeatChar) +
    midBuilder +
    getRightPadding(unusedLength, repeatChar) +
    rightBuilder
  );
}

export default function SectionCommentGenerator() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [lineLength, setLineLength] = useState("80");
  const [indentationSize, setIndentationSize] = useState("2");
  const [commentStyle, setCommentStyle] = useState("C");

  const refreshOutput = () => {
    setOutput(
      generate(
        text,
        commentStyle as any,
        parseInt(lineLength),
        parseInt(indentationSize)
      )
    );
  };

  useEffect(refreshOutput, [text, lineLength, indentationSize, commentStyle]);

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          <TextField
            label="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <Stack direction={"row"} gap={2} alignItems={"end"} flexWrap={"wrap"}>
            <FormControl>
              <FormLabel>Comment style</FormLabel>
              <RadioGroup
                row
                value={commentStyle}
                onChange={(e, v) => setCommentStyle(v)}
              >
                <FormControlLabel value="C" control={<Radio />} label="C" />
                <FormControlLabel
                  value="Python"
                  control={<Radio />}
                  label="Python"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Line size"
              type="number"
              size="small"
              value={lineLength}
              sx={{ width: "14ch" }}
              onChange={(e) => setLineLength(e.target.value)}
            />
            <TextField
              label="Tab size"
              type="number"
              size="small"
              sx={{ width: "14ch" }}
              value={indentationSize}
              onChange={(e) => setIndentationSize(e.target.value)}
            />
          </Stack>
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
          {output && <pre>{output}</pre>}
        </Stack>
      )}
    </BrowserOnly>
  );
}
