import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalphan",
  description: "Hire the best developer for your next project.",
  generator: "Next.js",
  applicationName: "Dalphan",
  referrer: "origin-when-cross-origin",
  keywords: ["Dalphan", "Developer", "Projects", "Hire"],
  authors: [{ name: "Thomas Allred" }],
  creator: "Thomas Allred",
  publisher: "Thomas Allred",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
