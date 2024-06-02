import type { Metadata } from "next";
import Navbar from "../components/navbar";
import BlogItem from "../components/blogItem";
import ReactLogo from "../../public/react.webp";
import TurboSnail from "../../public/turboSnail.webp";

export const metadata: Metadata = {
  title: "Blog \u2014 Dalphan | Thomas Allred",
  description: "Contact Dalphan (Thomas Allred) for your next project.",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Blog",
    "DalphanDev",
    "React",
    "Node",
    "Go",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start justify-between w-full px-8 my-8">
        <BlogItem
          href="/"
          imgSrc={TurboSnail}
          title="Creating Turbo"
          description="Detailing the development process of Turbo, a modern request library used for bypassing cybersecurity checks."
          direction="left"
        />
      </div>
    </main>
  );
}
