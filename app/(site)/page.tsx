import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyActivibility from "@/components/MyActivibility";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MyActivibility />
      <Contact />
    </div>
  );
}
