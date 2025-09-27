export type Post = {
  slug: string;
  content: string;
  // extracted from frontmatter
  title: string;
  date: string;
  author: string;
  description: string;
};
