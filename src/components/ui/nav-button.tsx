// components/ui/nav-button.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface NavButtonProps {
  href: string;
  children: ReactNode;
  className?: string;  // Add this line
  tag?: "left" | "center" | "right";
}

export function NavButton({ href, children, className = "", tag }: NavButtonProps) {
  // Add base classes and merge with passed className
  const baseClasses = "px-4 py-2 text-sm font-medium";
  const roundedClasses = tag === "left" ? "rounded-l-md" : 
                       tag === "right" ? "rounded-r-md" : 
                       "rounded-none";
  
  const combinedClasses = `${baseClasses} ${roundedClasses} ${className}`;

  return (
    <Link href={href} className={combinedClasses.trim()}>
        {children}
    </Link>
  );
}