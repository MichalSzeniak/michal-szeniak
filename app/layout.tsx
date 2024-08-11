import { Metadata } from "next";
import Favicon from "/public/favicon.ico";
import Og from "/public/og.png";

export const metadata: Metadata = {
  title: "Michal Szeniak - portfolio",
  description: "Check out my best works and projects!",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    title: "Michal Szeniak - portfolio",
    description: "Check out my best works and projects!",
    url: "https://www.michalszeniak.pl/",
    type: "website",
    images: [Og.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Twitter portfolio",
    description: "Check out my best works and projects!",
    images: [Og.src],
  },
  keywords:
    "michal szeniak, portfolio, web development, frontend, JavaScript, React",
  robots: "index,follow",
  authors: {
    name: "Michał Szeniak",
  },
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
