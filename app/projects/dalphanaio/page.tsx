import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">Dalphan AIO</h2>
        <div className="flex justify-between items-center space-x-8 flex-grow">
          <iframe
            className="flex-grow"
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152803180223819776?compact=1"
            height="500"
            width="1200"
            frameBorder="0"
            allowFullScreen
            title="Embedded post"
          ></iframe>
          <div className="flex-shrink">
            <p className="font-medium text-xl mb-8">
              Dalphan AIO is a bot software designed to streamline and optimize
              online purchases by automating the buying process across multiple
              platforms. Leveraging multiple programming languages, DalphanAIO
              was created to exceed modern industry standards.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg mb-8">
              <li>
                DalphanAIO was able to reduce checkout times by up to 1,000% on
                some sites.
              </li>
              <li>
                Designed and implemented intuitive user interfaces for the bot,
                utilizing Electron, React, Redux and Figma for frontend design.
              </li>
              <li>
                Architected and developed the core functionalities of
                DalphanAIO, writing robust and efficient code primarily in
                Typescript and Golang.
              </li>
              <li>
                Developed and integrated various APIs to enable seamless
                interactions between DalphanAIO and online retail platforms,
                ensuring compatibility and functionality.
              </li>
            </ul>
            <Link
              href="https://github.com/DalphanDev/DalphanAIO-Showcase"
              target="_blank"
            >
              <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
                View Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
