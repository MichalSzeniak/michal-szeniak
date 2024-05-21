"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <nav className="fixed top-0 z-[10] w-full bg-neutral-950/30 py-3 backdrop-blur-lg sm:py-7 md:text-sm lg:text-base print:hidden">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 px-5 sm:gap-0">
        <ul className="flex justify-center gap-5">
          <motion.p
            className="mb-0 font-poppins text-2xl font-black tracking-tight xl:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              y: {
                duration: 0.25,
              },
            }}
          >
            <Link href={"/"}>
              <span className="text-blue-500">M</span>
              <span className="text-foreground">S</span>
            </Link>
          </motion.p>

          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              y: {
                duration: 0.25,
              },
            }}
          >
            <Button variant="outline" size="icon">
              <a
                href={`https://github.com/MichalSzeniak`}
                rel="noopener"
                target="_blank"
                className="font-nunito"
              >
                <Github />
              </a>
            </Button>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              y: {
                duration: 0.25,
              },
            }}
          >
            <Button variant="outline" size="icon">
              <a
                href={`https://www.linkedin.com/in/michal-szeniak/`}
                rel="noopener"
                target="_blank"
              >
                <Linkedin />
              </a>
            </Button>
          </motion.li>
        </ul>

        <Menu />
        {/* <div className=" hidden gap-2 sm:flex sm:gap-10">
          <ul className="mb-0 flex gap-4">
            <li>
              <Button
                variant="ghost"
                asChild
                className={`link font-nunito text-base ${
                  pathname === "/" ? "bg-secondary font-bold text-primary" : ""
                }`}
              >
                <Link href={"/"}>Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className={`link font-nunito text-base ${
                  pathname === "/posts"
                    ? "bg-secondary font-bold text-primary"
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
                className={`link font-nunito text-base ${
                  pathname === "/links"
                    ? "bg-secondary font-bold text-primary"
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
                className={`link font-nunito text-base ${
                  pathname === "/contact"
                    ? "bg-secondary font-bold text-primary"
                    : ""
                }`}
              >
                <Link href={"/contact"}>Contact</Link>
              </Button>
            </li>
          </ul>

          <ModeToggle />
        </div> */}
      </div>
    </nav>
  );
};
export default Navigation;
