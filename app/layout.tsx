import Link from "next/link";
import { reader } from "./reader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialLinks = await reader.singletons.socialLinks.read();

  return (
    <html lang="pl">
      <body suppressHydrationWarning>
        <header>
          <nav>
            <Link href={"/"}>Home</Link>
          </nav>
        </header>
        {children}
        <hr />
        <footer>
          <h2>Znajdziesz mnie na:</h2>
          <ul>
            {socialLinks?.github && (
              <li>
                <a
                  href={`https://github.com/${socialLinks?.github}`}
                  rel="noopener"
                  target="_blank"
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
      </body>
    </html>
  );
}
