"use client";

import { clsx, sleep } from "@/util";
import { useEffect, useRef, useState } from "react";
import { BetterLink } from "./BetterLink";
import { Button } from "./Button";

function* nextChar(line: string) {
  for (const char of line) {
    yield char;
  }
}

interface Props {
  lines: string[];
}

export function Expressive404(props: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [line, setLine] = useState(0);
  const [pause, setPause] = useState(false);

  // ref to track the pause state inside the interval
  const pauseRef = useRef(pause);
  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  const lineSpeed = 30;
  const waitBetweenLines = 300;

  useEffect(() => {
    if (line >= props.lines.length) {
      setPause(true);
      return;
    }

    const gen = nextChar(props.lines[line]);
    const intervalId = setInterval(async () => {
      if (pauseRef.current) return;

      if (!textAreaRef.current) return;
      const textArea = textAreaRef.current;
      const { value, done } = gen.next();

      if (!done) {
        textArea.value += value;
        textArea.scrollTop = textArea.scrollHeight;
      } else {
        if (line !== props.lines.length - 1) textArea.value += "\n";
        clearInterval(intervalId);
        await sleep(waitBetweenLines);
        setLine((prevLine) => prevLine + 1);
      }
    }, lineSpeed);

    return () => clearInterval(intervalId);
    // only run this effect when the line changes
  }, [line, props.lines]);

  return (
    <div>
      <textarea
        placeholder="The webserver is typing..."
        ref={textAreaRef}
        rows={10}
        className={clsx(
          "w-full p-3 rounded-md bg-neutral-900 resize-y outline-none",
          "text-[#3f0] text-base font-mono leading-tight",
          !pause && "overflow-hidden"
        )}
        readOnly
      />
      <div className="flex justify-between items-center mt-2">
        <span>
          Inspired by{" "}
          <BetterLink href="https://www.cmarshall.com/Error_404.html">
            cmarshall&apos;s page
          </BetterLink>
        </span>
        {/* hide button after last line is shown */}
        {
          // TODO: implement restart button to replay the animation
        }
        {line < props.lines.length && (
          <Button onClick={() => setPause(!pause)}>
            {pause ? "Resume" : "Pause"}
          </Button>
        )}
      </div>
    </div>
  );
}
