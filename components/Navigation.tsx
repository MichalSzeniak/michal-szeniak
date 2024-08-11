"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <nav className="fixed top-0 z-[50] w-full bg-neutral-950/30 py-3 backdrop-blur-lg sm:py-7 md:text-sm lg:text-base print:hidden">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 px-5 sm:gap-0">
        <ul className="flex items-center gap-6 *:p-1">
          <motion.li
            className="font-wpoppins mb-0  text-4xl font-black tracking-tight"
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
          </motion.li>

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
                aria-label="Github"
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
                aria-label="Linkedin"
              >
                <Linkedin />
              </a>
            </Button>
          </motion.li>
        </ul>

        <Menu />
      </div>
    </nav>
  );
};
export default Navigation;
