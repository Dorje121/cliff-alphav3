import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";


interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number) : Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
    href,
    children,
    className,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();

    const handleTransitionLink = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // Run page transition animation
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(500);
       
        // Navigate to the new page
        router.push(href);
        await sleep(500); 

        // Remove the transition class after navigation
        body?.classList.remove("page-transition");
    }
    
    return (
        <Link
            href={href}
            className={className}
            onClick={(e) => handleTransitionLink(e)}
            {...props}
        >
            {children}
        </Link>
    )
}

