"use client";

import { Mail } from "lucide-react";
import Reveral from "./Reveral";

const Contact = () => {
  return (
    <section className="my-24 w-full px-8 sm:my-52">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center">
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
              If you have any inquiries or suggestions, I’m all ears. Don’t
              hesitate to get in touch.
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
      </div>
    </section>
  );
};
export default Contact;
