// import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar";

const CubeWithNoSSR = dynamic(() => import("./components/logo"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      {/* <CubeWithNoSSR /> */}
      <h1 className="absolute top-0 z-10">Hey, I&apos;m Dalphan</h1>
      <h2 className="absolute top-0 z-10">
        I&apos;m a fullstack developer with experience in NextJS, Tensorflow,
        Electron, and Go.
      </h2>
    </main>
  );
}
