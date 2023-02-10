import React from "react";
import NextLink from "next/link";

export const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink href={href} style={{ textDecoration: "none", width: "full" }}>
      {children}
    </NextLink>
  );
};
