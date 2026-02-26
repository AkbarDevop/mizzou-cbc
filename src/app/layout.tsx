import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Builders Club @ Mizzou",
  description:
    "Learn, Build, and Ship with Claude AI at the University of Missouri. Free Claude Pro access, API credits, workshops, and a community of builders.",
  openGraph: {
    title: "Claude Builders Club @ Mizzou",
    description:
      "Learn, Build, and Ship with Claude AI at the University of Missouri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
