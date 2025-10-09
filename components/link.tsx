import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

export function Link({
  children,
  className,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={cn(
        "relative text-primary hover:after:bg-primary/50 after:w-full after:inline-block after:h-px after:bg-primary/10 after:absolute after:left-0 after:-bottom-[1.5px] after:transition-colors",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
