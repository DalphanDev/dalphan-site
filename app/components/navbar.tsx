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
          width={142}
          height={80}
          unoptimized
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkePu/noEIwDiqkL4KARPrGDl/kLFLAAAAAElFTkSuQmCC"
        />
      </Link>
      <nav className="flex justify-center items-center w-full py-5">
        <ul className="flex space-x-10">
          <Link href="/contact">
            <li>
              <p className="font-bold text-2xl">Contact</p>
            </li>
          </Link>
        </ul>
      </nav>
      <Link target="_blank" href="https://github.com/DalphanDev">
        <Image
          className="top-2 invert mr-8 w-12"
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
