import { BetterLink } from "@/components/BetterLink";
import { FormattedDate } from "@/components/FormattedDate";
import { Hr } from "@/components/Hr";
import { SITE_TITLE } from "@/constants";
import { getAllPosts, getPostBySlug, rehypeImagePrefix } from "@/lib/api";
import "@/styles/blog-post.css";
import { imageSizeFromFile } from "image-size/fromFile";
import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const components: MDXRemoteProps["components"] = {
  hr: Hr,
  a: BetterLink,
  img: async (props) => {
    const dimensions = await imageSizeFromFile(`public${props.src}`);
    const { alt, ...otherProps } = props;
    return (
      <ExportedImage
        alt={alt || ""}
        width={dimensions.width}
        height={dimensions.height}
        {...otherProps}
      />
    );
  },
};

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  defaultLang: "plaintext",
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
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [
                // for autolinking urls
                remarkGfm,
              ],
              rehypePlugins: [
                [rehypeImagePrefix, { slug: post.slug }],
                [rehypePrettyCode, rehypePrettyCodeOptions],
              ],
            },
          }}
        />
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
