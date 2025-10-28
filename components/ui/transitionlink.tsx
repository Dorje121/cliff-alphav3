import React from "react";
import Link from "next/link";

export const TransitionLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}