import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "forest-kit — scale design without losing craft",
  description:
    "A workflow for turning an idea into something real. Built for Claude Code. AI-skeptical, opinionated, file-based. Studio K.",
  metadataBase: new URL("https://treeline-sand.vercel.app"),
  openGraph: {
    title: "forest-kit — scale design without losing craft",
    description:
      "A workflow for turning an idea into something real. Built for Claude Code.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "forest-kit",
    description: "Scale design without losing craft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
