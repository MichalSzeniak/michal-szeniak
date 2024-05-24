import Link from "next/link";
import Reveral from "./Reveral";
import { WobbleCard } from "./WobbleCard";
import { MousePointerClick } from "lucide-react";

const MyActivibility = () => {
  return (
    <section className=" my-10 flex w-full flex-col items-center justify-center gap-8 px-8 py-10 sm:py-0 lg:flex-row">
      <Link href="/projects" className="w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 bg-red-900 "
          className="cursor-pointer"
        >
          <div className="w-full lg:max-w-xs">
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 lg:text-left xl:text-7xl">
              Check out my projects
              <span className="text-primary">.</span>
              <MousePointerClick className="absolute bottom-5 left-1/2 h-14 w-14 -translate-x-1/2  animate-pulse text-neutral-50/50" />
            </h2>
          </div>
        </WobbleCard>
      </Link>
      <Link href="/resume" className="w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 bg-yellow-500 "
          className="cursor-pointer"
        >
          <div className="w-full lg:max-w-xs">
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 lg:text-left xl:text-7xl">
              Check out my resume
              <span className="text-primary">.</span>
              <MousePointerClick className="absolute bottom-5 left-1/2 h-14 w-14 -translate-x-1/2  animate-pulse text-neutral-50/50" />
            </h2>
          </div>
        </WobbleCard>
      </Link>
      <Link href="/articles" className="w-full">
        <WobbleCard
          containerClassName="col-span-1 bg-blue-900"
          className="cursor-pointer"
        >
          <div className="w-full lg:max-w-xs">
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 lg:text-left xl:text-7xl">
              Check out my articles
              <span className="text-primary">.</span>
              <MousePointerClick className="absolute bottom-5 left-1/2 h-14 w-14 -translate-x-1/2  animate-pulse text-neutral-50/50" />
            </h2>
          </div>
        </WobbleCard>
      </Link>
    </section>
  );
};
export default MyActivibility;
