export interface Quote {
  text: string;
  attribution: string;
  dateAdded: string;
}

// TODO: let the text and attribution be markdown strings
export const quotes: Quote[] = [
  {
    text: "The greatest obstacle to blogging is the temptation to futz with your website instead of writing. Don’t succumb!",
    attribution: "https://www.benkuhn.net/writing/",
    dateAdded: "2024-08-26",
  },
];
