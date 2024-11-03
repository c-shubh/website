import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Box from "@mui/material/Box";
import Button from "@site/src/components/Button";
import Heading from "@theme/Heading";
import type { Props } from "@theme/NotFound/Content";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

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

function* nextChar(line: string) {
  for (let char of line) {
    yield char;
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Expressive404() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineSpeed = 30;
  const waitBetweenLines = 300;
  const [line, setLine] = useState(0);
  const [pause, setPause] = useState(false);
  const [triggerFlag, setTriggerFlag] = useState(false);

  useEffect(() => {
    // index out of bounds check
    if (line >= tl.length) return;
    const gen = nextChar(tl[line]);
    const intervalId = setInterval(async () => {
      if (pause) return;
      if (!textAreaRef.current) return; // exit early if null
      const textArea = textAreaRef.current;
      const { value, done } = gen.next();
      if (!done) {
        // TODO: add typing effect (underscore)
        textArea.value += value;
        // scroll to bottom
        textArea.scrollTop = textArea.scrollHeight;
      } else {
        // append new line if not the last line
        if (line !== tl.length - 1) textArea.value += "\n";
        clearInterval(intervalId);
        await sleep(waitBetweenLines);
        setLine(line + 1); // this line causes the effect to run again
      }
    }, lineSpeed);

    return () => clearInterval(intervalId);
  }, [line, triggerFlag]);

  const trigger = () => setTriggerFlag(!triggerFlag);

  return (
    <Box>
      <Box
        component={"textarea"}
        ref={textAreaRef}
        rows={10}
        sx={{
          width: "100%",
          color: "#3f0",
          padding: 1.2,
          lineHeight: 1.2,
          fontWeight: "bold",
          fontSize: "medium",
          fontFamily: "'Nimbus Mono PS', 'Courier New', monospace",
          border: "none",
          borderRadius: 1.5,
          backgroundColor: "#000",
          resize: "none",
          outline: "none",
        }}
        readOnly
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          Inspired by{" "}
          <Link href="https://www.cmarshall.com/Error_404.html">
            cmarshall's page
          </Link>
        </span>
        <Button
          label={pause ? "Resume" : "Pause"}
          title="Pause/Resume (happens after the current line)"
          onClick={() => {
            if (pause) {
              trigger();
            }
            setPause(!pause);
          }}
          variant="secondary"
          size={"sm"}
        />
      </Box>
    </Box>
  );
}

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page"
            >
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page"
            >
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page"
            >
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
          <p>The webserver says:</p>
          <Expressive404 />
        </div>
      </div>
    </main>
  );
}
