import BrowserOnly from "@docusaurus/BrowserOnly";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
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
  Custom: {
    start: "",
    end: "",
  },
};

type CommentStyleName = keyof typeof styles;

interface CommentStyleWithName {
  name: CommentStyleName;
  style: (typeof styles)[CommentStyleName];
}

function generate(
  text: string,
  style: CommentStyleWithName,
  lineLength: number,
  indentationSize: number
) {
  if (!text) {
    text = "Hey there!";
  }

  const open = style.style.start;
  const gapAfterOpen = " ";
  const gapBeforeText = " ";
  const gapAfterText = " ";
  const gapBeforeClose = " ";
  const close = style.style.end;
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
  const [indentationSize, setIndentationSize] = useState("0");
  const [commentStyle, setCommentStyle] = useState<CommentStyleWithName>({
    name: "C",
    style: styles.C,
  });

  const refreshOutput = () => {
    setOutput(
      generate(
        text,
        commentStyle,
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
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Box>
              <FormControl>
                <FormLabel>Comment style</FormLabel>
                <RadioGroup
                  row
                  value={commentStyle.name}
                  onChange={(e, v) => {
                    const name = v as CommentStyleName;
                    if (v in styles)
                      setCommentStyle({ name, style: styles[name] });
                  }}
                >
                  {Object.keys(styles).map((style) => (
                    <FormControlLabel
                      key={style}
                      value={style}
                      control={<Radio />}
                      label={style}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
            <Stack direction={"row"} spacing={2} alignItems={"flex-end"}>
              <TextField
                label="Start"
                type="text"
                size="small"
                value={commentStyle.style.start}
                sx={{ width: "8ch" }}
                disabled={commentStyle.name !== "Custom"}
                onChange={(e) =>
                  setCommentStyle((prev) => ({
                    ...prev,
                    style: { ...prev.style, start: e.target.value },
                  }))
                }
              />
              <TextField
                label="End"
                type="text"
                size="small"
                value={commentStyle.style.end}
                sx={{ width: "8ch" }}
                disabled={commentStyle.name !== "Custom"}
                onChange={(e) =>
                  setCommentStyle((prev) => ({
                    ...prev,
                    style: { ...prev.style, end: e.target.value },
                  }))
                }
              />
              <TextField
                label="Line length"
                type="number"
                size="small"
                value={lineLength}
                sx={{ width: "10ch" }}
                onChange={(e) => {
                  // @ts-expect-error: this is a number input
                  const value = e.target.value as number;
                  setLineLength(Math.max(0, value).toString());
                }}
              />
              <TextField
                label="Indentation"
                type="number"
                size="small"
                sx={{ width: "10ch" }}
                value={indentationSize}
                onChange={(e) => {
                  // @ts-expect-error: this is a number input
                  const value = e.target.value as number;
                  setIndentationSize(Math.max(0, value).toString());
                }}
              />
            </Stack>
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
