import Navbar from "./components/navbar";
import Figma from "../public/figma.png";
import Link from "next/link";
import Image from "next/image";
import PrettyImage from "./components/prettyImage";
import ReactLogo from "../public/react.webp";
import NodeJSLogo from "../public/nodejs.svg";
import GoLogo from "../public/go.png";
import PythonLogo from "../public/python.svg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center text-white">
      <Navbar />
      <div className="flex flex-col items-center 3xl:flex-row 3xl:items-start justify-between my-8 space-x-8 w-full px-8 max-w-[1920px]">
        <PrettyImage src={Figma} alt="Dalphan AIO" width={1200} height={675} />
        <div className="flex flex-col space-y-8 flex-grow justify-center items-center">
          <h1 className="font-bold text-5xl">Hey, I&apos;m Dalphan</h1>
          <h2 className="font-medium text-xl">
            I&apos;m a Full Stack Web Developer specializing in:
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-[#050518] outline outline-2 outline-white rounded-lg justify-center items-center">
            <Image
              className="m-4"
              src={ReactLogo}
              width={96}
              height={96}
              alt="react"
            />
            <Image
              className="m-4"
              src={NodeJSLogo}
              width={96}
              height={96}
              alt="nodejs"
            />
            <Image
              className="m-4"
              src={GoLogo}
              width={96}
              height={96}
              alt="go"
            />
            <Image
              className="m-4"
              src={PythonLogo}
              width={96}
              height={96}
              alt="python"
            />
          </div>
          <h2 className="font-medium text-xl">
            Interact with some of my projects below:
          </h2>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex justify-between space-x-4">
              <Link href="/projects/dalphanaio">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                  Dalphan AIO
                </button>
              </Link>
              <Link href="/projects/sku-ai">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                  SKU AI
                </button>
              </Link>
            </div>
            <div className="flex justify-between space-x-4">
              <Link href="/projects/turbo">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                  Turbo
                </button>
              </Link>
              <Link href="/projects/akamai">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                  Akamai Sensor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
