import Image from "next/image";
import Link from "next/link";
import Anim from "../../public/anim.gif";
import GithubLogo from "../../public/github.png";

export default function Header() {
  return (
    <header className="relative flex justify-center items-center w-full header py-5">
      <Link href="/">
        <Image
          className="top-2"
          src={Anim}
          alt="logo"
          width={160}
          height={160}
          unoptimized
        />
      </Link>
      <nav className="flex justify-center items-center w-full py-5">
        <ul className="flex space-x-10">
          <Link href="/projects">
            <li>
              <p className="font-bold text-lg">Projects</p>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <p className="font-bold text-lg">Contact</p>
            </li>
          </Link>
        </ul>
      </nav>
      <Link href="https://github.com/DalphanDev">
        <Image
          className="top-2 invert mr-8"
          src={GithubLogo}
          alt="github"
          width={64}
          height={64}
        />
      </Link>
    </header>
  );
}
