import React from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface ItemData {
  img: string;
  title: string;
  postDate?: string;
}

function Image({ data }: { data: ItemData }) {
  // TODO: image viewer
  // TODO: display location, date, caption, etc
  // TODO: do I need a CDN?
  // TODO: compress images, takes too long to load all images on a slow connection
  return (
    <Box sx={{ flex: 1, aspectRatio: "1 / 1" }} display={"flex"}>
      <Box
        component={"img"}
        srcSet={`${data.img}?fit=crop&auto=format&dpr=2 2x`}
        src={`${data.img}?fit=crop&auto=format`}
        width={"100%"}
        height={"100%"}
        sx={{ objectFit: "cover" }}
        alt={data.title}
        title={data.title}
        loading="lazy"
      />
    </Box>
  );
}

function ImageGrid({ itemData }: { itemData: ItemData[] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.4, sm: 1 }}>
        {itemData.map((item) => (
          <Grid item xs={4} key={item.img}>
            <Image data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  const itemData: ItemData[] = items
    .filter(
      ({
        content: {
          metadata: {
            frontMatter: { image, title, date },
          },
        },
      }) => image && title && date
    )
    .map(
      ({
        content: {
          metadata: {
            frontMatter: { image, title, date },
          },
        },
      }) => ({
        img: image!,
        title: title!,
        postDate: date + "",
      })
    );

  console.log(itemData);

  return <ImageGrid itemData={itemData} />;

  return (
    <>
      {items.map(({ content: BlogPostContent }) => {
        return (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        );
      })}
    </>
  );
}
