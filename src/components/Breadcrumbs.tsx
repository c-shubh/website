import DocusaurusLink from "@docusaurus/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface Item {
  text: string;
  url?: string;
}

export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className="margin-bottom--md"
    >
      {items.map(({ text, url }, idx) =>
        idx === items.length - 1 ? ( // last item
          <Typography key="3" sx={{ color: "text.primary" }}>
            {text}
          </Typography>
        ) : (
          <Link
            key={idx}
            color="inherit"
            component={DocusaurusLink}
            {...{
              underline: url ? "hover" : undefined,
              href: url ? url : undefined,
            }}
          >
            {text}
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
}
