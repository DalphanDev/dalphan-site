import Image from "next/image";
import dynamic from "next/dynamic";

const CubeWithNoSSR = dynamic(() => import("./components/Cube"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CubeWithNoSSR />
    </main>
  );
}
