"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 z-100 bg-background w-full py-3 shadow-xl dark:shadow-gray-200/5 shadow-gray-200/20 print:hidden sm:py-4 md:text-sm lg:text-base">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 px-5 sm:gap-0">
        <p className="text-2xl font-black tracking-tight xl:text-4xl font-nunito mb-0">
          <Link href={"/"}>
            <span className="text-cyan-500">M</span>
            <span className="text-foreground">S</span>
          </Link>
        </p>
        <HamburgerMenu />
        <div className=" gap-2 sm:gap-10 hidden sm:flex">
          <ul className="flex gap-4 mb-0">
            <li>
              <Button
                variant="ghost"
                asChild
                className={`font-nunito link text-base ${
                  pathname === "/" ? "text-primary font-bold bg-secondary" : ""
                }`}
              >
                <Link href={"/"}>Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className={`font-nunito link text-base ${
                  pathname === "/posts"
                    ? "text-primary font-bold bg-secondary"
                    : ""
                }`}
              >
                <Link href={"/posts"}>Posts</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className={`font-nunito link text-base ${
                  pathname === "/links"
                    ? "text-primary font-bold bg-secondary"
                    : ""
                }`}
              >
                <Link href={"/links"}>Links</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className={`font-nunito link text-base ${
                  pathname === "/contact"
                    ? "text-primary font-bold bg-secondary"
                    : ""
                }`}
              >
                <Link href={"/contact"}>Contact</Link>
              </Button>
            </li>
          </ul>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
