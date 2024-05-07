import { reader } from "app/reader";

const Footer = async () => {
  const socialLinks = await reader.singletons.socialLinks.read();

  return (
    <footer>
      <h2>Znajdziesz mnie na:</h2>
      <ul>
        {socialLinks?.github && (
          <li>
            <a
              href={`https://github.com/${socialLinks?.github}`}
              rel="noopener"
              target="_blank"
              className="font-nunito"
            >
              Github
            </a>
          </li>
        )}

        {socialLinks?.linkedin && (
          <li>
            <a
              href={`https://github.com/${socialLinks?.linkedin}`}
              rel="noopener"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
};
export default Footer;
