import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

export function Link({
  children,
  className,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <NextLink {...props} className={cn("text-primary hover:underline", className)}>
      {children}
    </NextLink>
  );
}
