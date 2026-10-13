import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
      <Icon name="arrow" width={18} height={18} />
    </Link>
  );
}
