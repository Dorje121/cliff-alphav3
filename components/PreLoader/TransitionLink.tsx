"use client";
import React from "react";
import Link from "next/link";
import { usePageTransition } from "@/components/PreLoader/PageTransitionProvider";
import { useRouter } from "next/navigation";

interface TransitionLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...props
}) => {
  const { startTransition } = usePageTransition();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Start the transition
    startTransition();

    // Navigate after a small delay to allow the transition to start
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
