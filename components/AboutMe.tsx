import { SquareGanttChart } from "lucide-react";
import Reveral from "./Reveral";
import { Badge } from "./ui/badge";

const useAtWork = [
  "React",
  "JavaScript",
  "Typescript",
  "HTML",
  "CSS",
  "Formik",
  "React Hook Form",
  "REST API",
  "RTK Query",
  "Tailwind",
];

const useAfterWork = [
  "NodeJS",
  "Express",
  "MongoDB",
  "Postgres",
  "Keystatic",
  "Shadcn",
  "ReactQuery",
];

const AboutMe = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-l  px-8 py-10 sm:py-0">
      <div className="flex max-w-screen-lg flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="mx-auto flex w-full basis-full flex-col justify-center lg:basis-3/4">
          <Reveral>
            <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-7xl">
              About
              <span className="text-primary">.</span>
            </h2>
          </Reveral>

          <div className="mt-10 flex flex-col gap-5 text-pretty text-xl">
            <Reveral>
              <span className="text-pretty">
                As a passionate Front-End Developer with over two years of
                experience, I have honed my craft in building a diverse array of
                projects. My expertise lies in React technology, where I excel
                in writing high-quality, straightforward code to solve complex
                challenges. I am on the lookout for opportunities that will
                allow me to leverage my skills and experience to develop
                innovative and user-centric web applications.
              </span>
            </Reveral>
            <Reveral>
              <span>
                Currently, I am a key member of the development team at Ultimate
                Systems in Kraków, where I have been contributing since August
                2021. My role involves developing multiple applications using
                React, and my ability to code independently has been
                instrumental in implementing a CRM system, a cancer treatment
                website, e-learning platform, and task management solutions.
              </span>
            </Reveral>{" "}
            <Reveral>
              <span>
                As I continue to grow professionally, I am dedicated to
                enhancing my full-stack development expertise, with a current
                focus on mastering Node.js.
              </span>
            </Reveral>
          </div>
        </div>
        <div className="flex w-full basis-full flex-col  gap-9 lg:basis-1/4">
          <Reveral>
            <div>
              <span className="mb-5 flex items-center gap-3">
                <SquareGanttChart className="h-10 w-10" />
                <p className="text-xl font-black">Use at work</p>
              </span>
              <div className="flex flex-wrap gap-3">
                {useAtWork.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveral>
          <Reveral>
            <div>
              <span className="mb-5 flex items-center gap-3">
                <SquareGanttChart className="h-10 w-10" />
                <p className="text-xl font-black">Use after work</p>
              </span>
              <div className="flex flex-wrap gap-3">
                {useAfterWork.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveral>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
