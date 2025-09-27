import { FormattedDate } from "@/components/FormattedDate";
import { Hr } from "@/components/Hr";
import { SITE_TITLE } from "@/constants";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <div>
        <div>
          <h1 className="m-0">{post.title}</h1>
          <div>
            <FormattedDate date={new Date(post.date)} />
          </div>
          <Hr />
        </div>
        {
          // TODO: code highlighting with https://shiki.style/
          // TODO: images in markdown
        }
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${SITE_TITLE}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
