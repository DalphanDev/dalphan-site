// import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar";

const CubeWithNoSSR = dynamic(() => import("./components/cube"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <CubeWithNoSSR />
    </main>
  );
}
