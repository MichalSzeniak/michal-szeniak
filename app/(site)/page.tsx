import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Contact />
    </div>
  );
}
