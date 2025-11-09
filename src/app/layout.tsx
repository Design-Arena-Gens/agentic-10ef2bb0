import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Partner | Capabilities Overview",
  description:
    "Discover exactly what this AI developer can architect, optimize, and deploy for your product—end-to-end capabilities, workflows, and value delivery.",
  metadataBase: new URL("https://agentic-10ef2bb0.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
