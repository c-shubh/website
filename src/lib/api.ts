import { type Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import path from "node:path";
import { visit } from "unist-util-visit";

const postsDirectory = path.join(process.cwd(), "blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const slugPath = path.join(postsDirectory, slug);
  const mdFullPath = path.join(slugPath, "index.md");
  const mdxFullPath = path.join(slugPath, "index.mdx");
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

export interface RehypeImagePrefixOptions {
  slug: string;
}

export function rehypeImagePrefix(options: RehypeImagePrefixOptions) {
  const { slug } = options;
  if (!slug) {
    throw new Error("rehypeImagePrefix requires a slug option");
  }
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        const src = node.properties.src;
        // Prepend the new path to relative image URLs
        if (src && !src.startsWith("http") && !src.startsWith("/")) {
          node.properties.src = path.join("/images/blog", slug, src);
        }
      }
    });
  };
}
