export interface Quote {
  text: string;
  attribution: string;
  dateAdded: string;
}

export const quotes: Quote[] = [
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
