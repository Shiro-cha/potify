
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface NavButtonProps extends LinkProps {
  tag?: "left" | "center" | "right";
  className?: string;
  children: ReactNode;
}

export function NavButton({
  href,
  children,
  className = "",
  tag,
  ...rest
}: NavButtonProps) {
  const baseClasses = "px-4 py-2 text-sm font-medium";
  const roundedClasses =
    tag === "left"
      ? "rounded-l-md"
      : tag === "right"
      ? "rounded-r-md"
      : "rounded-none";

  const combinedClasses = [baseClasses, roundedClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={combinedClasses} {...rest}>
      {children}
    </Link>
  );
}
