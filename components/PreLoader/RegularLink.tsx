"use client";
import React from "react";
import Link from "next/link";

interface RegularLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const RegularLink: React.FC<RegularLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export default RegularLink;
