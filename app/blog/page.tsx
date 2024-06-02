import type { Metadata } from "next";
import Navbar from "../components/navbar";
import BlogItem from "../components/blogItem";
import DalphanLogo from "../../public/logo.png";
import TurboSnail from "../../public/turboSnail.webp";
import AkamaiLogo from "../../public/akamailogo.png";
import TensorFlowLogo from "../../public/tensorflowlogo.png";

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

export default function BlogPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col grow items-center  px-8 my-4 space-y-4">
        <BlogItem
          href="/blog/turbo"
          imgSrc={TurboSnail}
          title="Creating Turbo"
          description="Detailing the development process of Turbo, a modern request library used for bypassing cybersecurity checks."
          direction="left"
        />
        <BlogItem
          href="/blog/dalphan-aio"
          imgSrc={DalphanLogo}
          title="Building Dalphan AIO"
          description="Explaining the story of Dalphan AIO, an electron-based app for automating tasks. "
          direction="right"
          customWidth={130}
          customHeight={130}
        />
        <BlogItem
          href="/blog/akamai"
          imgSrc={AkamaiLogo}
          title="Reverse Engineering Akamai"
          description="Describing the steps taken to de-obfuscate and reverse engineer Akamai's security measures."
          direction="left"
          customWidth={240}
          customHeight={270}
        />
        <BlogItem
          href="/blog/sku-ai"
          imgSrc={TensorFlowLogo}
          title="Architecting the SKU AI Project"
          description="Describing the steps taken to de-obfuscate and reverse engineer Akamai's security measures."
          direction="right"
          customWidth={100}
          customHeight={100}
        />
      </div>
    </main>
  );
}
