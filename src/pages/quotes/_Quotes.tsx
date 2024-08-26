import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fuse, { FuseResult } from "fuse.js";
import { useEffect, useState } from "react";
import { quotes, type Quote } from "./_data";

const fuse = new Fuse(quotes, {
  keys: [
    { name: "text", getFn: (quote) => quote.text },
    { name: "attribution", getFn: (quote) => quote.attribution },
  ],
});

function QuoteView({ quote }: { quote: Quote }) {
  return (
    <>
      <blockquote>
        <p>{quote.text}</p>
        <p>~ {quote.attribution}</p>
      </blockquote>
      <hr />
    </>
  );
}

export default function Quotes() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<Quote>[]>([]);

  useEffect(() => setResults(fuse.search(query)), [query]);
  // TODO: highlight search results
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
          />
          <Box component={"button"} onClick={() => setQuery("")}>
            Clear
          </Box>
        </Stack>
        <Box component={"span"} sx={{ fontSize: "10px" }}>
          this page is under construction, i'm yet to style the search bar
        </Box>
      </Box>
      {results.length > 0
        ? results.map((result) => <QuoteView quote={result.item} />)
        : quotes.map((quote) => <QuoteView quote={quote} />)}
    </div>
  );
}
