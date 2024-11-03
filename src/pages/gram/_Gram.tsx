import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";

interface ItemData {
  img: string;
  title: string;
  postDate?: string;
}

/* prettier-ignore */
const itemData: ItemData[] = [
  // convert heic images to webp before adding here
  // $ magick.exe .\20240627_163010.heic -quality 100% 20240627_163010.webp
  { img: '/img/gram/20240927_200113.webp', title: 'College corridor in the dark', postDate: '2024-11-03' },
  { img: '/img/gram/20240911_233537.jpg', title: 'Raatrani tree (Cestrum nocturnum)', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_181429.webp', title: 'Tree', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_174754.webp', title: 'Lake view through fence', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_174702.webp', title: 'Lakeside path', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_174153.webp', title: 'Lake', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_173438.webp', title: 'Cable bridge', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_152546.webp', title: 'Sky', postDate: '2024-11-03' },
  { img: '/img/gram/20240825_111831.webp', title: 'Fields', postDate: '2024-11-03' },
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
    <Box
      component={"img"}
      srcSet={`${data.img}?fit=crop&auto=format&dpr=2 2x`}
      src={`${data.img}?fit=crop&auto=format`}
      alt={data.title}
      title={data.title}
      loading="lazy"
    />
  );
}

export function Gram() {
  return (
    <Masonry columns={3} spacing={{ xs: 0.4, sm: 1 }}>
      {itemData.map((item) => (
        <Image data={item} key={item.img} />
      ))}
    </Masonry>
  );
}
