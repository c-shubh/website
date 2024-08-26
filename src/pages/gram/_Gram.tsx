import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface ItemData {
  img: string;
  title: string;
  postDate?: string;
}

/* prettier-ignore */
const itemData: ItemData[] = [
  { img: "/img/gram/cropped_20240707_154209.webp", title: "Flower 🌻", postDate: '2024-08-22' },
  { img: "/img/gram/IMG_20240822_003512_758.jpg", title: "🏆", },
  { img: "/img/gram/20240725_084302.webp", title: "College", },
  { img: "/img/gram/IMG_20240809_235629_135.jpg", title: "Sky", },
  { img: "/img/gram/InShot_20240729_085929792.jpg", title: "Hand painted fridge magnets by @artsy.dhruti", },
  { img: "/img/gram/20240627_163010.webp", title: "Rain", },
  { img: "/img/gram/IMG-20240715-WA0023.jpg", title: "GDSC", },
  { img: "/img/gram/20240713_222907.webp", title: "Train", },
  { img: "/img/gram/IMG_20240715_065441_356.jpg", title: "Buddha", },
];

export const postCount = itemData.length;

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

function ImageGrid() {
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

export function Gram() {
  return <ImageGrid />;
}
