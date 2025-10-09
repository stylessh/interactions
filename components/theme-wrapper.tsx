import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function ThemeWrapper({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
