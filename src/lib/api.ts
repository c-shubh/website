import { type Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "node:path";

const postsDirectory = join(process.cwd(), "blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const slugPath = join(postsDirectory, slug);
  const mdFullPath = join(slugPath, "index.md");
  const mdxFullPath = join(slugPath, "index.mdx");
  let fileContents: string | null = null;
  if (fs.existsSync(mdFullPath)) {
    fileContents = fs.readFileSync(mdFullPath, "utf8");
  } else if (fs.existsSync(mdxFullPath)) {
    fileContents = fs.readFileSync(mdxFullPath, "utf8");
  } else {
    throw new Error(`No markdown file found for slug: ${slug}`);
  }
  const { data, content } = matter(fileContents);
  // set default author
  if (!("author" in data)) {
    data.author = "Shubh A Chudasama";
  }
  return { ...data, slug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
