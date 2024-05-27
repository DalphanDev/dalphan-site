import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homepage \u2014 Dalphan | Thomas Allred",
  description: "Hire Dalphan (Thomas Allred) for your next project.",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Full-Stack",
    "Front-End",
    "Back-End",
    "React",
    "Node",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
  // metadataBase: "https://dalphan-site.vercel.app" as URL,
  twitter: {
    card: "summary_large_image",
    title: "Dalphan | Thomas Allred",
    description: "Hire Dalphan (Thomas Allred) for your next project.",
    siteId: "4821638103",
    creator: "@DalphanDev",
    creatorId: "4821638103",
    images: ["https://dalphan-site.vercel.app/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
