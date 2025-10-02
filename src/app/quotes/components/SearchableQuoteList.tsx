"use client";

import { BetterLink } from "@/components/BetterLink";
import Fuse, { FuseResult } from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { type Quote } from "../_data";

function insertMark(str: string, l: number, r: number) {
  return (
    str.slice(0, l) + "<mark>" + str.slice(l, r) + "</mark>" + str.slice(r)
  );
}

/**
 * Fuse.js returns overlapping and duplicate ranges in its matches. [1]
 *
 * This function merges them into non-overlapping ranges.
 *
 * [1]: https://github.com/krisk/Fuse/issues/778
 */
function mergeRanges(ranges: readonly [number, number][]): [number, number][] {
  if (ranges.length === 0) {
    return [];
  }
  // Sort the ranges by their starting index
  const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [sortedRanges[0]];
  for (let i = 1; i < sortedRanges.length; i++) {
    const current = sortedRanges[i];
    const lastMerged = merged[merged.length - 1];
    // Check for overlap or if they are adjacent
    if (current[0] <= lastMerged[1] + 1) {
      // Merge by extending the last range
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, so add the new range
      merged.push(current);
    }
  }
  return merged;
}

function highlight(results: FuseResult<Quote>[]): Quote[] {
  // TODO: optimize
  const ret: Quote[] = [];
  for (const result of results) {
    let local = result.item;
    for (const match of result.matches || []) {
      const key = match.key;
      if (key !== "text" && key !== "attribution") continue;
      // TODO: highlighting attribution messes up urls which conflict with <mark> tags
      if (key === "attribution") continue;
      const val = result.item[key];
      let finalStr = null;
      // iterate in reverse so that indices do not change after modifying string
      const indices = mergeRanges(match.indices);
      for (let i = indices.length - 1; i >= 0; i--) {
        const [start, endIncl] = indices[i];
        // only consider non empty substrings
        if (start >= endIncl + 1) continue;
        if (finalStr === null) finalStr = insertMark(val, start, endIncl + 1);
        else finalStr = insertMark(finalStr, start, endIncl + 1);
      }
      if (finalStr !== null) local = { ...local, [key]: finalStr };
    }
    ret.push(local);
  }
  return ret;
}

function MarkdownView({ children }: { children: string }) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]} // required to render <mark> tag
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => <BetterLink href={props.href || "#"} {...props} />,
        h3: (props) => <h3 className="mt-0" {...props} />,
      }}
    >
      {children}
    </Markdown>
  );
}

interface QuoteProps {
  quote: Quote;
  hideDate?: boolean;
}

function QuoteView({ quote, hideDate }: QuoteProps) {
  return (
    <div>
      {hideDate || <code className="block mb-2">{quote.dateAdded}</code>}
      <blockquote className="m-0 border-s-2 border-gray-300 bg-gray-50 px-4 py-2">
        <MarkdownView>{quote.text}</MarkdownView>
        <MarkdownView>{`~ ${quote.attribution}`}</MarkdownView>
      </blockquote>
    </div>
  );
}

export function SearchableQuoteList({ quotes }: { quotes: Quote[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Quote[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse(quotes, {
        keys: [
          { name: "text", getFn: (quote) => quote.text },
          { name: "attribution", getFn: (quote) => quote.attribution },
        ],
        includeMatches: true, // required for highlighting to work
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [quotes]
  );

  useEffect(() => setResults(highlight(fuse.search(query))), [fuse, query]);

  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-1">
        <input
          autoComplete="off"
          type="text"
          placeholder="Fuzzy search quotes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-1"
        />
        <button onClick={() => setQuery("")}>Clear</button>
      </div>
      <div className="space-y-8">
        {/* show search results or all quotes */}
        {(results.length > 0 ? results : quotes).map((result) => (
          <QuoteView key={result.text} quote={result} />
        ))}
      </div>
    </div>
  );
}
