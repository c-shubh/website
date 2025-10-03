import { FormattedDate } from "@/components/FormattedDate";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <section className="space-y-4">
      {posts.map((post) => (
        <div
          className="flex flex-col-reverse sm:flex-row sm:items-start gap-0.5 sm:gap-4"
          key={post.slug}
        >
          <FormattedDate
            date={new Date(post.date)}
            className="text-nowrap font-mono text-xs sm:text-base"
          />
          <a href={`/blog/${post.slug}/`} className="no-underline sm:-mt-[2px]">
            <h4 className="m-0">{post.title}</h4>
          </a>
        </div>
      ))}
    </section>
  );
}
