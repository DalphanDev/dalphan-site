import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full grow px-8">
        <h2 className="font-medium text-4xl">Dalphan AIO</h2>
        <div className="flex sm:flex-col 2xl:flex-row sm:items-center 2xl:items-start justify-between space-x-8 flex-grow">
          <iframe
            className="flex-grow mb-8 sm:w-full 2xl:w-1/2 h-80"
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152803180223819776?compact=1"
            // height="500"
            // width="1200"
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
                Engineered a full-stack solution integrating both front-end and
                back-end components using React.js, Node.js, and Go, reducing
                average checkout time by 75%.
              </li>
              <li>
                Implemented advanced algorithms that increased the checkout
                success rate to 80% during limited-• edition releases.
              </li>
              <li>
                Optimized the system architecture to support scaling from 10 to
                1,000 concurrent tasks without degradation in performance.
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
