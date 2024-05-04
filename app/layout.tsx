import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalphan",
  description: "Hire the best developer for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
