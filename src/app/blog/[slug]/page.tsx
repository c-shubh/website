import { FormattedDate } from "@/components/FormattedDate";
import { Hr } from "@/components/Hr";
import { SITE_TITLE } from "@/constants";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { Metadata } from "next";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href;

  if (href && href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href && href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const components: MDXRemoteProps["components"] = {
  hr: Hr,
  a: CustomLink,
  img: Image,
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article>
      <div>
        <div>
          <h1 className="m-0">{post.title}</h1>
          <div>
            <FormattedDate date={new Date(post.date)} />
          </div>
        </div>
        {
          // TODO: code highlighting with https://shiki.style/
          // TODO: images in markdown
        }
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
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
