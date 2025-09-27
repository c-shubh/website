import { SITE_TITLE } from "@/constants";
import { Hr } from "@/components/Hr";
import Link from "next/link";

const links = [
  { href: "/projects", text: "Projects" },
  { href: "/tools", text: "Tools" },
  { href: "/blog", text: "Blog" },
  { href: "/quotes", text: "Quotes" },
  { href: "/contact", text: "Contact" },
];

export function Navbar() {
  return (
    <header className="my-4">
      <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <Link href="/" className="no-underline text-black text-xl font-bold">
          {SITE_TITLE}
        </Link>
        <div className="flex space-x-4 flex-wrap">
          {links.map((link) => (
            <Link
              href={link.href}
              className="no-underline font-medium"
              key={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
      <Hr />
    </header>
  );
}
