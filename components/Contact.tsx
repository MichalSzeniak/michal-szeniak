"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Reveral from "./Reveral";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="h-screen w-full px-8">
      <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-center">
        <div className="flex justify-center">
          <Reveral>
            <h2 className="font-poppins text-4xl font-black tracking-tight sm:text-5xl xl:text-8xl">
              Contact
              <span className="text-blue-500">.</span>
            </h2>
          </Reveral>
        </div>

        <div className="mt-10 flex flex-col gap-5 text-pretty text-center text-lg sm:text-xl">
          <Reveral>
            <span className="text-pretty">Send me a message!</span>
          </Reveral>
        </div>

        <div className="mt-2 flex flex-col gap-5 text-center text-lg sm:text-xl">
          <Reveral>
            <span>
              Got a question or proposal, or just want to say hello? Go ahead.
            </span>
          </Reveral>
        </div>

        <div className="mt-7 text-lg sm:text-xl">
          <Reveral>
            <a
              className="flex items-center gap-3 font-black transition-all hover:text-blue-500"
              href="mailto:michal.szeniak@gmail.com"
            >
              <Mail /> michal.szeniak@gmail.com
            </a>
          </Reveral>
        </div>

        <ul className="mt-10 flex justify-center gap-5">
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
      </div>
    </section>
  );
};
export default Contact;
