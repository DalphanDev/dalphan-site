import Image from "next/image";
import Navbar from "./components/navbar";
import TaskPage from "../public/taskPage.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex sm:flex-col 2xl:flex-row sm:items-center 2xl:items-start justify-between my-8 space-x-8 w-full px-8">
        <Image
          className="shadow-2xl shadow-[#06c6dd]/50 rounded-md shrink mb-8"
          src={TaskPage}
          width={1000}
          height={540}
          alt="logo"
          priority
        />
        <div className="flex flex-col space-y-8 flex-grow ">
          <h1 className="font-bold text-5xl">Hey, I&apos;m Dalphan</h1>
          <h2 className="font-medium text-xl">
            I&apos;m a Full Stack Web Developer specializing in:
          </h2>
          <ul className="list-disc list-inside font-normal text-lg">
            <li>HTML/CSS/JS</li>
            <li>React</li>
            <li>Node</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
          <h2 className="font-medium text-xl">
            Interact with some of my projects below:
          </h2>
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link href="/projects/dalphanaio">
              <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
                Dalphan AIO
              </button>
            </Link>
            <div className="flex justify-between space-x-4">
              <Link href="/projects/turbo">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
                  Turbo
                </button>
              </Link>
              <Link href="/projects/akamai">
                <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
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
