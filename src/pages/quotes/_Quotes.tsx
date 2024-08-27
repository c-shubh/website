import Link from "@docusaurus/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fuse, { FuseResult } from "fuse.js";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { quotes, type Quote } from "./_data";

const fuse = new Fuse(quotes, {
  keys: [
    { name: "text", getFn: (quote) => quote.text },
    { name: "attribution", getFn: (quote) => quote.attribution },
  ],
  includeMatches: true, // required for highlighting to work
  ignoreLocation: true,
  minMatchCharLength: 2,
});

function insertMark(str: string, l: number, r: number) {
  return (
    str.slice(0, l) + "<mark>" + str.slice(l, r) + "</mark>" + str.slice(r)
  );
}

function highlight(results: FuseResult<Quote>[]): Quote[] {
  // TODO: optimize
  const ret: Quote[] = [];
  for (const result of results) {
    let local = result.item;
    for (const match of result.matches || []) {
      // ALERT: ensure match key is present and valid
      const key = match.key! as "text" | "attribution";
      const val = result.item[key];
      let finalStr = null;
      // iterate in reverse so that indices do not change after modifying string
      for (let i = match.indices.length - 1; i >= 0; i--) {
        const [start, endIncl] = match.indices[i];
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
        // use docusaurus Link component, to handle external links properly
        a: ({ node, ...props }) => <Link {...props} />,
      }}
    >
      {children}
    </Markdown>
  );
}

function QuoteView({ quote }: { quote: Quote }) {
  return (
    <>
      <blockquote>
        <MarkdownView>{quote.text}</MarkdownView>
        <MarkdownView>{`~ ${quote.attribution}`}</MarkdownView>
      </blockquote>
      <hr />
    </>
  );
}

export default function Quotes() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Quote[]>([]);

  useEffect(() => setResults(highlight(fuse.search(query))), [query]);

  return (
    <div>
      <Box mb={3}>
        <Stack direction={"row"} spacing={1}>
          <Box
            component={"input"}
            autoComplete="off"
            type="text"
            placeholder="Fuzzy search quotes..."
            value={query}
            flex={1}
            padding={1}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <Box component={"button"} onClick={() => setQuery("")}>
            Clear
          </Box>
        </Stack>
        <Box component={"span"} sx={{ fontSize: "10px" }}>
          this page is under construction, i'm yet to style the search bar
        </Box>
      </Box>
      {(results.length > 0 ? results : quotes).map((result) => (
        <QuoteView key={result.text} quote={result} />
      ))}
    </div>
  );
}
