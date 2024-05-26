import { reader } from "app/reader";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Reveral from "./Reveral";

const data = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/articles",
    name: "My articles",
  },
  {
    href: "/projects",
    name: "My projects",
  },
  {
    href: "/resume",
    name: "My resume",
  },
];

const Footer = async () => {
  const socialLinks = await reader.singletons.socialLinks.read();

  return (
    <footer className="mx-auto w-full max-w-screen-xl bg-background">
      <hr />
      <div className="flex flex-col py-1">
        {data.map((item) => (
          <Button
            variant="link"
            asChild
            className="link w-full justify-center font-poppins  text-neutral-100 sm:justify-start sm:text-xl"
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between px-6 pb-10 sm:flex-row">
        <ul className="my-6 flex justify-center gap-5">
          {socialLinks?.github && (
            <li>
              <Button variant="outline" size="icon">
                <a
                  href={`https://github.com/${socialLinks?.github}`}
                  rel="noopener"
                  target="_blank"
                  className="font-nunito"
                >
                  <Github />
                </a>
              </Button>
            </li>
          )}

          {socialLinks?.linkedin && (
            <li>
              <Button variant="outline" size="icon">
                <a
                  href={`https://www.linkedin.com/in/${socialLinks?.linkedin}`}
                  rel="noopener"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </Button>
            </li>
          )}
        </ul>
        <p>Made with ❤ by Michal</p>
      </div>
    </footer>
  );
};
export default Footer;
