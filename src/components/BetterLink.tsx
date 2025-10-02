import Link from "next/link";

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

/**
 * Open external links in a new tab, internal links in the same tab.
 */
export function BetterLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
) {
  const moreProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {};
  if (!isInternalLink(props.href)) {
    moreProps.target = "_blank";
    moreProps.rel = "noopener noreferrer";
  }

  return (
    <Link {...props} {...moreProps}>
      {props.children}
    </Link>
  );
}
