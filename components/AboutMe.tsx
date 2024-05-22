import Reveral from "./Reveral";

const AboutMe = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-l from-cyan-600 to-blue-600 px-8 py-10 sm:py-0">
      <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col justify-center">
        <Reveral>
          <h2 className="font-heading mx-auto text-center font-poppins text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-7xl">
            About
            <span className="text-black">.</span>
          </h2>
        </Reveral>

        <div className="xl:lg mt-10 flex flex-col gap-5 text-pretty text-xl">
          <Reveral>
            <span className="text-pretty">
              As a passionate Front-End Developer with over two years of
              experience, I have honed my craft in building a diverse array of
              projects. My expertise lies in React technology, where I excel in
              writing high-quality, straightforward code to solve complex
              challenges. I am on the lookout for opportunities that will allow
              me to leverage my skills and experience to develop innovative and
              user-centric web applications.
            </span>
          </Reveral>
          <Reveral>
            <span>
              Currently, I am a key member of the development team at Ultimate
              Systems in Kraków, where I have been contributing since August
              2021. My role involves developing multiple applications using
              React, and my ability to code independently has been instrumental
              in implementing a CRM system, a cancer treatment website,
              e-learning platform, and task management solutions.
            </span>
          </Reveral>{" "}
          <Reveral>
            <span>
              As I continue to grow professionally, I am dedicated to enhancing
              my full-stack development expertise, with a current focus on
              mastering Node.js.
            </span>
          </Reveral>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
