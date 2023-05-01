import { Project } from "@/types";
import { Tech as t } from "./tech";

export const projects: Project[] = [
  {
    title: "Raft Consensus Algorithm",
    description:
      "This project implements [Raft algorithm](https://raft.github.io/) in Typescript using EventEmitter for timing and Express for inter-node communication.",
    builtWith: [t.expressjs, t.nodejs, t.typescript],
    startDate: "2023-04-15",
    srcUrl: "https://github.com/0xVikasRushi/raft-blockchain/",
  },
  {
    title: "Phonebook",
    description:
      "A phonebook application with ability to fuzzy search, create, update and delete contacts. User input is validated on both client and server side and contacts are stored in MongoDB.",
    builtWith: [
      t.reactjs,
      t.fusejs,
      t.typescript,
      t.nodejs,
      t.expressjs,
      t.mongodb,
    ],
    startDate: "2023-03-04",
    liveUrl: "https://c-shubh.github.io/fullstackopen/phonebook/",
    srcUrl:
      "https://github.com/c-shubh/fullstackopen/tree/main/part2/phonebook",
  },
  {
    title: "IPFS Encrypt",
    srcUrl: "https://github.com/c-shubh/ipfs-encrypt-web",
    liveUrl: "https://ipfs-encrypt-web.vercel.app/",
    builtWith: [t.chakarui, t.nextjs, t.typescript, t.expressjs, t.nodejs],
    description:
      "A website demoing the [IPFS encrypt](https://github.com/0xVikasRushi/ipfs-encrypt) library used to encrypt and upload or decrypt and download files from IPFS.",
    startDate: "2023-02-17",
  },
  {
    title: "CVR Results",
    description:
      "A small script to scrape results of students from [CVR results page](https://results.cvr.ac.in/cvrresults1/resulthome.php), given a range of roll numbers. The scraped result is exported as CSV.",
    builtWith: [t.nodejs, t.typescript],
    startDate: "2023-02-15",
    srcUrl: "https://github.com/c-shubh/cvr-results",
  },
  {
    title: "Angular Demo",
    description:
      "An Angular SPA made for a Google Developer Student Clubs workshop showcasing a static page, a form and a dynamic todo-list app which stores todos in LocalStorage.",
    builtWith: [t.angular, t.typescript],
    startDate: "2023-02-02",
    srcUrl: "https://github.com/c-shubh/angular-demo",
    liveUrl: "https://c-shubh.github.io/angular-demo/",
  },
  {
    title: "Smart Attendance",
    startDate: "2023-01-22",
    description:
      "A react native app to take attendance of students. To prevent proxy/fake attendance it employs heuristics such as biometric authorization and distance estimation using Bluetooth Low Energy (BLE). The submitted attendance can be viewed and analyzed in the Admin dashboard.",
    builtWith: [t.reactnative, t.mongodb, t.nextjs, t.expressjs],
    srcUrl: "https://github.com/c-shubh/GRIET-2k23",
  },
  {
    title: "section",
    description:
      "A small CLI program to create comments that divide source code into sections. Supports generation of section comments in various programming languages and indentation levels.",
    builtWith: [t.python],
    startDate: "2023-01-13",
    srcUrl: "https://github.com/c-shubh/section",
  },
  {
    title: "Daily Quote",
    description:
      "A react SPA which shows a quote from _Daily Inspiration From The Monk Who Sold His Ferrari by Robin Sharma_. Shows a unique quote each day of the year.",
    builtWith: [
      t.chakarui,
      t.nextjs,
      t.tailwindcss,
      t.typescript,
      t.expressjs,
      t.mongodb,
    ],
    startDate: "2022-12-16",
    srcUrl: "https://github.com/c-shubh/daily-quote",
    liveUrl: "https://c-shubh.github.io/daily-quote/",
  },
  {
    title: "ytm",
    description:
      "A CLI music player that streams music from YouTube using [mpv](https://mpv.io/) and [yt-dlp](https://github.com/yt-dlp/yt-dlp). The music is stored in a simple file containing music name and the YouTube URL. [fzf](https://github.com/junegunn/fzf) is used for fuzzily searching the list of saved music.",
    builtWith: [t.python],
    startDate: "2022-12-05",
    srcUrl: "https://github.com/c-shubh/ytm",
  },
  {
    title: "Chat Grapher",
    srcUrl: "https://github.com/c-shubh/chat_grapher",
    description:
      "A small site to visualize frequency of texts sent and received from an exported WhatsApp chat.",
    builtWith: [t.html, t.tailwindcss, t.typescript],
    startDate: "Nov 12, 2022",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "A rock paper scissors game with a computer opponent. The game has multiple rounds and a score board to track score in each round. After 5 rounds, the player with majority of score is the winner.",
    builtWith: [t.html, t.css, t.typescript],
    startDate: "Aug 9, 2022",
    srcUrl: "https://github.com/c-shubh/odin-rock-paper-scissors",
    liveUrl: "https://c-shubh.github.io/odin-rock-paper-scissors/",
  },
  {
    title: "Landing page",
    description:
      "A landing page made according to the [specifications](https://www.theodinproject.com/lessons/foundations-landing-page#assignment) by The Odin Project.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "Aug 7, 2022",
    srcUrl: "https://github.com/c-shubh/odin-landing-page",
    liveUrl: "https://c-shubh.github.io/odin-landing-page/",
  },
  {
    title: "Recipes",
    description: "A static recipes website.",
    builtWith: [t.html, t.css],
    startDate: "Jul 19, 2022",
    srcUrl: "https://github.com/c-shubh/odin-recipes",
    liveUrl: "https://c-shubh.github.io/odin-recipes/",
  },
  {
    title: "CVR Alumni Website",
    description:
      "A static Alumni website made for CVR College of Engineering as a part of Webathon.",
    builtWith: [t.html, t.css, t.bootstrap, t.javascript],
    startDate: "2022-04-11",
    srcUrl: "https://github.com/c-shubh/cvr-alumni-website",
    liveUrl: "https://c-shubh.github.io/cvr-alumni-website/",
  },
  {
    title: "HackerNews client",
    description:
      "Lists HackerNews posts using its [API](https://github.com/HackerNews/API).",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "Aug 23, 2021",
    srcUrl: "https://github.com/c-shubh/hackernews",
    liveUrl: "https://c-shubh.github.io/hackernews/",
  },
  {
    title: "BMI Calculator",
    description: "A simple BMI calculator.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "Jul 10, 2021",
    srcUrl: "https://github.com/c-shubh/bmi-calculator",
    liveUrl: "https://c-shubh.github.io/bmi-calculator/",
  },
  {
    title: "Codeforces charts",
    description:
      "Uses the [Codeforces API](https://codeforces.com/apiHelp) to visualize the language usage frequency and contest rating trends of a user.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "May 24, 2021",
    srcUrl: "https://github.com/c-shubh/codeforces-charts",
    liveUrl: "https://c-shubh.github.io/codeforces-charts/",
  },
  {
    title: "Advice",
    description:
      "Receive unlimited unsolicited advice in this beautifully designed web page.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "May 11, 2021",
    srcUrl: "https://github.com/c-shubh/advice",
    liveUrl: "https://c-shubh.github.io/advice/",
  },
  {
    title: "Calculator",
    description:
      "A calculator. Design inspired by the Windows 10 calculator program.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "May 8, 2021",
    srcUrl: "https://github.com/c-shubh/calculator",
    liveUrl: "https://c-shubh.github.io/calculator/",
  },
  {
    title: "Binary calculator",
    description: "A small and simple binary calculator.",
    builtWith: [t.html, t.css, t.javascript],
    startDate: "Apr 24, 2021",
    srcUrl: "https://github.com/c-shubh/binary-calculator",
    liveUrl: "https://c-shubh.github.io/binary-calculator/",
  },
  {
    title: "PDF to MP3 GUI",
    description:
      "A Tkinter GUI program to convert PDF and text to MP3 audio. It also has an inbuilt PDF viewer.",
    builtWith: [t.python],
    startDate: "Mar 12, 2021",
    srcUrl: "https://github.com/c-shubh/PDF-to-MP3-GUI",
  },
  {
    title: "To-do list GUI app",
    description: "A small to-do list application made with Tkinter.",
    builtWith: [t.python],
    startDate: "Jul 21, 2020",
    srcUrl: "https://github.com/c-shubh/TO-DO-list",
  },
  {
    title: "Text to ASCII",
    description:
      "A CLI program to create ASCII text bannners. Supports multiple fonts.",
    builtWith: [t.python],
    startDate: "Jun 26, 2020",
    srcUrl: "https://github.com/c-shubh/text2ascii",
  },
  {
    title: "Python programs",
    description: "Random programs I made while learning Python.",
    builtWith: [t.python],
    startDate: "Jun 2, 2020",
    srcUrl: "https://github.com/c-shubh/Python",
  },
];
