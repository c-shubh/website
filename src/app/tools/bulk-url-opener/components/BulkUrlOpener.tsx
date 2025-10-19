"use client";

import { Button } from "@/components/Button";
import { useState } from "react";

export function BulkUrlOpener() {
  const [text, setText] = useState("");

  const openUrls = () => {
    const urls = text.split("\n");
    for (const url of urls) {
      if (!!url) window.open(url);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {
          // TODO: use uiwjs/react-codemirror for line numbers later
        }
        <textarea
          placeholder="Paste URLs"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-2 py-2"
          autoFocus
        />
        <p>
          Remember to <strong>allow popups</strong> from this site in your
          browser.
        </p>
        <Button className="w-fit" onClick={openUrls}>
          Open all URLs
        </Button>
      </div>
    </>
  );
}
