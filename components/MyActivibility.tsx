import Link from "next/link";
import Reveral from "./Reveral";
import { WobbleCard } from "./WobbleCard";

const MyActivibility = () => {
  return (
    <section className=" my-10 flex w-full flex-col items-center justify-center gap-8 px-8 py-10 sm:py-0 lg:flex-row">
      <Link href="/projects" className="w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 bg-red-900 "
          className="cursor-pointer"
        >
          <div className="max-w-xs">
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-7xl">
              Check out my projects
              <span>.</span>
            </h2>
            <p className="mt-4   text-neutral-200">click here</p>
          </div>
        </WobbleCard>
      </Link>
      <Link href="/articles" className="w-full">
        <WobbleCard
          containerClassName="col-span-1 bg-blue-900"
          className="cursor-pointer"
        >
          <div className="max-w-xs">
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-7xl">
              Check out my articles
              <span>.</span>
            </h2>
            <p className="mt-4  text-neutral-200">click here</p>
          </div>
        </WobbleCard>
      </Link>
    </section>
  );
};
export default MyActivibility;
