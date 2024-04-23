import Link from "next/link";
import { reader } from "./reader";
import "./index.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Navigation from "../components/Navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialLinks = await reader.singletons.socialLinks.read();

  return (
    <html lang="pl">
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased container",
          fontSans.variable
        )}
      >
        <Navigation />

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
