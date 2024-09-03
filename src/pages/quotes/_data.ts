export interface Quote {
  text: string;
  attribution: string;
  dateAdded: string;
}

export const quotes: Quote[] = [
  {
    text: "And when nobody wakes you up in the morning, and when nobody waits for you at night, and when you can do whatever you want. What do you call it, freedom or loneliness?",
    attribution:
      "[Charles Bukowski](https://x.com/amor_fatti/status/1830569781017141661)",
    dateAdded: "2024-09-03",
  },
  {
    text: "A half truth is a whole lie.",
    attribution: "[Yiddish proverb](https://youtu.be/OCLk1Dy7-Jo?t=276)",
    dateAdded: "2024-09-03",
  },
  {
    text: `We should be careful of each other  
We should be kind  
While there is still time`,
    // found in hn bio of https://news.ycombinator.com/user?id=maxbond
    attribution:
      '[Philip Larkin, "The Mower"](https://www.poetryfoundation.org/poems/48423/the-mower-56d229a740294)',
    dateAdded: "2024-08-31",
  },
  {
    text: "Every rise and ascent to a higher level represents the death of our lower personality at the level we leave behind. Then, we can gently return to that level and whisper to the ear of the actor playing that role with love, understanding, and affection, 'Yes, you are me, but I am not just you!' This way, we can end the dominion of that role in our lives. We both free it from an existence it actually hates and offer ourselves an opportunity for growth! The biggest obstacle in abandoning the role, that is, the lower personality, is not knowing the existence of a higher level - the fear that if the role goes away, we will fall into a void.",
    attribution: "https://news.ycombinator.com/item?id=41403090",
    dateAdded: "2024-08-31",
  },
  {
    text: "For an eye washed in silvers, everything looks gray.",
    attribution:
      "[Aditya Purwa](https://news.ycombinator.com/item?id=41396943)",
    dateAdded: "2024-08-31",
  },
  {
    text: `1) Do your duty, but do not concern yourself with the results.
2) The fruits of your actions are not for your enjoyment.
3) Even while working, give up the pride of doership.
4) Do not be attached to inaction.`,
    attribution:
      "[Bhagavad Gita 2.47](https://www.holy-bhagavad-gita.org/chapter/2/verse/47/#commentary)",
    dateAdded: "2024-08-27",
  },
  {
    text: "The greatest obstacle to blogging is the temptation to futz with your website instead of writing. Don’t succumb!",
    attribution: "https://www.benkuhn.net/writing/",
    dateAdded: "2024-08-26",
  },
];
