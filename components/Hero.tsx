import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import { notFound } from "next/navigation";
import Reveral from "./Reveral";

const Hero = async () => {
  const header = await reader.singletons.header.read();

  if (!header) return notFound();

  return (
    <header className="relative flex h-[50rem] w-full  items-center justify-center bg-blue-950 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-950"></div>
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center">
        <Reveral>
          <h1 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-7xl">
            {header?.header}
            <span className="text-blue-500">.</span>
          </h1>
        </Reveral>
        <Reveral>
          <h2 className="text-4xl  sm:text-5xl">
            <span>I'm a </span>
            <span className="font-black text-blue-500">Frontend Developer</span>
          </h2>
        </Reveral>

        <Reveral>
          <div className="mt-10 text-xl xl:text-3xl">
            <DocumentRenderer document={await header.content()} />
          </div>
        </Reveral>
      </div>
    </header>
  );
};
export default Hero;
