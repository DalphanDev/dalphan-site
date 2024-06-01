import Image from "next/image";
import Link from "next/link";
import GithubLogo from "../../public/github.png";

export default function Header() {
  return (
    <header className="relative flex justify-center items-center w-full header py-5">
      <Link href="/">
        <video
          width="80"
          height="83"
          preload="none"
          loop
          autoPlay
          muted
          className="rounded-full ml-4 md:ml-8"
          playsInline
        >
          <source src="/bounce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Link>
      <nav className="flex justify-center items-center flex-grow py-5">
        <ul className="flex space-x-4 md:space-x-10 ">
          <Link href="/contact">
            <li className="hover:scale-110 transform transition">
              <p className="font-bold text-2xl">Contact Me</p>
            </li>
          </Link>
          <div className="mx-4 w-px h-8 bg-gray-500"></div>
          <Link href="/blog">
            <li className="hover:scale-110 transform transition">
              <p className="font-bold text-2xl">Blog</p>
            </li>
          </Link>
        </ul>
      </nav>
      <Link target="_blank" href="https://github.com/DalphanDev">
        <Image
          className="top-2 invert mr-4 md:mr-8 w-12 transform transition hover:scale-110 "
          src={GithubLogo}
          width={48}
          height={48}
          alt="github"
          placeholder="blur"
        />
      </Link>
    </header>
  );
}
