"use client";

import { copyToClipboard } from "@/util";
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
    <div className="flex flex-col gap-2">
      <input
        className="p-2"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <div className="flex flex-col gap-2">
        <p className="mb-0">Comment style</p>
        <div className="flex flex-row flex-wrap">
          {Object.keys(styles).map((style) => (
            <label key={style} className="mr-2">
              <input
                type="radio"
                value={style}
                checked={commentStyle.name === style}
                onChange={(e) => {
                  const name = e.target.value as CommentStyleName;
                  if (name in styles)
                    setCommentStyle({ name, style: styles[name] });
                }}
              />
              <span className="ml-1">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-2">
        <div>
          <fieldset className="mb-4">
            <legend className="">Comment style</legend>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {Object.keys(styles).map((style) => (
                <div key={style} className="flex items-center gap-2">
                  <input
                    id={`tools-section-comment-generator-style-${style}`}
                    type="radio"
                    value={style}
                    checked={commentStyle.name === style}
                    onChange={(e) => {
                      const name = e.target.value as CommentStyleName;
                      if (name in styles)
                        setCommentStyle({ name, style: styles[name] });
                    }}
                  />
                  <label
                    htmlFor={`tools-section-comment-generator-style-${style}`}
                  >
                    {style}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="flex flex-row gap-2 items-end">
          <input
            placeholder="Start"
            type="text"
            value={commentStyle.style.start}
            className="w-[8ch] p-2"
            disabled={commentStyle.name !== "Custom"}
            onChange={(e) =>
              setCommentStyle((prev) => ({
                ...prev,
                style: { ...prev.style, start: e.target.value },
              }))
            }
          />
          <input
            placeholder="End"
            type="text"
            value={commentStyle.style.end}
            className="w-[8ch] p-2"
            disabled={commentStyle.name !== "Custom"}
            onChange={(e) =>
              setCommentStyle((prev) => ({
                ...prev,
                style: { ...prev.style, end: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-2 items-end">
          <input
            placeholder="Line length"
            type="number"
            value={lineLength}
            className="w-[10ch] p-2"
            onChange={(e) => {
              // @ts-expect-error: this is a number input
              const value = e.target.value as number;
              setLineLength(Math.max(0, value).toString());
            }}
          />
          <input
            placeholder="Indentation"
            type="number"
            className="w-[10ch] p-2"
            value={indentationSize}
            onChange={(e) => {
              // @ts-expect-error: this is a number input
              const value = e.target.value as number;
              setIndentationSize(Math.max(0, value).toString());
            }}
          />
        </div>
      </div>
      <div className="flex flex-row gap-1 items-center">
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
      </div>
      {output && <pre>{output}</pre>} */}
    </div>
  );
}
