import { BetterLink } from "@/components/BetterLink";
import { InlineCode } from "@/components/InlineCode";
import { clsx } from "@/util";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { quotes, type Quote } from "./_data";

export const metadata: Metadata = {
  title: "Quotes",
  description: "A collection of quotes and poems I like.",
};

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

interface QuoteViewProps {
  quote: Quote;
  hideDate?: boolean;
}

function QuoteView({ quote, hideDate }: QuoteViewProps) {
  return (
    <div>
      {hideDate || (
        <InlineCode className="block mb-3">{quote.dateAdded}</InlineCode>
      )}

      <blockquote
        className={clsx(
          "m-0 border-s-2 border-gray-300 bg-gray-50 px-4 py-2",
          "[&>:first-child]:mt-0 [&>:last-child]:mb-0"
        )}
      >
        <MarkdownView>{quote.text}</MarkdownView>
        <MarkdownView>{`~ ${quote.attribution}`}</MarkdownView>
      </blockquote>
    </div>
  );
}

export default function Quotes() {
  return (
    <div>
      {typeof metadata.title === "string" && (
        <h1 className="mt-0">{metadata.title}</h1>
      )}
      <p>{metadata.description}</p>
      <p>
        <strong>{quotes.length}</strong> quotes
      </p>
      <div className="space-y-8">
        {quotes.map((result) => (
          <QuoteView key={result.text} quote={result} />
        ))}
      </div>
    </div>
  );
}
