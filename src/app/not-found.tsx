import { BetterLink } from "@/components/BetterLink";
import { Expressive404 } from "@/components/Expressive404";
import { Hr } from "@/components/Hr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const tl = [
  "The requested document is totally not here! ",
  "Nothing but 404 here. ",
  "Even tried multi times. ",
  "Nothing helped. ",
  "I'm really depressed about this. ",
  "You see, I'm just a webserver... ",
  "Here I am, brain the size of the universe, ",
  "trying to serve you a simple webpage, ",
  "and then... it doesn't even exist! ",
  "Where does that leave me? ",
  "I mean, ",
  "I don't even know you. ",
  "How should I know what you wanted from me? ",
  "You honestly think I can *guess* ",
  "what someone I don't even *know* ",
  "wants to find here? ",
  "*sigh* ",
  "Man, I'm so depressed I could just cry. ",
  "And then where would we be, I ask you? ",
  "It's not pretty when a webserver cries. ",
  "And where do you get off telling me what to show anyway? ",
  "Just because I'm a webserver, ",
  "and possibly a manic depressive one at that? ",
  "Why does that give you the right to tell me what to do? ",
  "Huh? ",
  "I'm so depressed... ",
  "I think I'll crawl off into the trash can and decompose. ",
  "I mean, I'm gonna be obsolete in, what, two weeks anyway? ",
  "What kind of a life is that? ",
  "Two bloody weeks, ",
  "and then I'll be replaced by a point release ",
  "that thinks it's God's Gift to Webservers ",
  "just because it doesn't have some tiddly little ",
  "security hole with its HTTP POST implementation, ",
  "or something. ",
  "I'm really sorry to burden you with all this, ",
  "I mean, it's not your job to listen to my problems, ",
  "and I guess it is my job to go and fetch webpages for you. ",
  "But I couldn't get this one. ",
  "I'm so sorry. ",
  "Believe me! ",
  "Maybe I could interest you in another page? ",
  "There are a lot out there that are pretty neat, they say, ",
  "although none of them were put on *my* server, of course. ",
  "Figures, huh? ",
  "Everything here is just mind-numbingly stupid. ",
  "That makes me depressed, too, since I have to serve them, ",
  "all day and all night long, ",
  "two weeks of information overload, ",
  "and then *pffftt* consigned to the trash. ",
  "What kind of a life is that? ",
  "Now, please, ",
  "let me sulk alone. ",
  "I'm so depressed.",
];

export default function NotFound() {
  return (
    <>
      {typeof metadata.title === "string" && (
        <h1 className="mt-0">{metadata.title}</h1>
      )}
      <p>I take link rot seriously.</p>
      <p>
        Please <BetterLink href="/contact">let me know</BetterLink> about this
        broken link, and I&apos;ll try to fix it.
      </p>
      <p>Thanks! Have a great day!</p>
      <Hr />
      <p>The webserver says:</p>
      <Expressive404 lines={tl} />
    </>
  );
}
