import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactions",
  description: "Best interactions for your website.",

  openGraph: {
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 800,
        alt: "Interactions",
      },
    ],
    description: "Best interactions for your website.",
    title: "Interactions",
    siteName: "Interactions",
  },

  alternates: {
    canonical: "https://interactions.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
