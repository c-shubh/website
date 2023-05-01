import { Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const links = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Bookmarks", href: "/bookmarks" },
    { title: "Reading", href: "/reading" },
    { title: "About", href: "/about" },
  ];

  return (
    <Stack spacing={6} direction={"row"} py={3} px={8} borderBottom={"1px"}>
      {links.map((link) => (
        <Link as={NextLink} href={link.href} key={link.title}>
          <Text decoration={router.asPath === link.href ? "underline" : ""}>
            {link.title}
          </Text>
        </Link>
      ))}
    </Stack>
  );
}
