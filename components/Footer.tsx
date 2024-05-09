import { reader } from "app/reader";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = async () => {
  const socialLinks = await reader.singletons.socialLinks.read();

  return (
    <footer className="w-full mx-auto max-w-screen-xl">
      <hr />
      <div className="flex items-center justify-between px-6 flex-col sm:flex-row">
        <ul className="flex justify-center gap-5 my-6">
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
