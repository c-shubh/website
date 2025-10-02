import "@/styles/quotes.css";
import type { Metadata } from "next";
import { quotes } from "./_data";
import { SearchableQuoteList } from "./components/SearchableQuoteList";

export const metadata: Metadata = {
  title: "Quotes",
  description: "A collection of quotes and poems I like.",
};

export default function QuotesPage() {
  return (
    <div>
      {typeof metadata.title === "string" && (
        <h1 className="mt-0">{metadata.title}</h1>
      )}
      <p>{metadata.description}</p>
      <p>
        <strong>{quotes.length}</strong> quotes
      </p>
      <SearchableQuoteList quotes={quotes} />
    </div>
  );
}
