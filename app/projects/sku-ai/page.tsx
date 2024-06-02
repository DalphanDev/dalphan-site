import type { Metadata } from "next";
import PrettyImage from "@/app/components/prettyImage";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";
import SKUImg from "../../../public/skuai.png";

export const metadata: Metadata = {
  title: "Turbo \u2014 Dalphan | Thomas Allred",
  description: "Explore the Turbo project by Dalphan (Thomas Allred).",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Turbo",
    "Go",
    "Project",
    "Anti-Bot",
    "Cybersecurity",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
};

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">SKU AI</h2>
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start justify-between space-x-8 flex-grow">
          <PrettyImage
            src={SKUImg}
            alt="SKU Predictions"
            width={850}
            height={1084}
          />
          <div className="shrink">
            <p className="font-medium text-xl mb-8">
              SKU AI is a machine learning project that uses image recognition
              to identify and categorize shoes based on their images. The
              project uses a convolutional neural network to analyze the images
              and categorize them into different shoe types.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg mb-8">
              <li>
                Trained and optimized image classification models utilizing
                Python and TensorFlow, achieving an average accuracy rate of
                85%.
              </li>
              <li>
                Architected and deployed a robust API utilizing Node.js and
                Express, efficiently processing over 10,000 daily predictions
                with a 99.99% uptime.
              </li>
              <li>
                Developed and implemented a notification system using Node.js to
                alert customers of profitable leads, significantly increasing
                user profits by several thousand dollars.
              </li>
            </ul>
            <Link href="https://github.com/DalphanDev/sku-ai" target="_blank">
              <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                View Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
