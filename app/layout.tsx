import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmsans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quicklie Distributions",
  description: "Buy and Order Drinks - Quicklie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}