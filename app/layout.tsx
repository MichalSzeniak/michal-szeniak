import { Metadata } from "next";
import Favicon from "/public/favicon.ico";
import Og from "/public/og.png";

export const metadata: Metadata = {
  title: "Michal Szeniak - portfolio",
  description: "Michal Szeniak - portfolio",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    title: "Michal Szeniak - portfolio",
    description: "Michal Szeniak - portfolio",
    url: "https://www.michalszeniak.pl/",
    type: "website",
    images: [
      {
        url: Og.src,
        width: 800,
        height: 600,
      },
    ],
  },
  keywords: "portfolio, web development, frontend, JavaScript, React",
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
