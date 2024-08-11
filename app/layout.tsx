// import { Metadata } from "next";
// import Favicon from "/public/favicon.ico";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Michal Szeniak - portfolio",
//   description: "Michal Szeniak - portfolio",
//   icons: [{ rel: "icon", url: Favicon.src }],
//   openGraph: {
//     title: "Michal Szeniak - portfolio",
//     description: "Michal Szeniak - portfolio",
//     url: "https://www.michalszeniak.pl/",
//     type: "website",
//     images: [
//       {
//         url: "/og.png",
//         width: 800,
//         height: 600,
//       },
//     ],
//   },
//   keywords: "portfolio, web development, frontend, JavaScript, React",
//   robots: "index,follow",
//   authors: {
//     name: "Michał Szeniak",
//   },
//   themeColor: "#121212",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Michal Szeniak - portfolio</title>
        <meta name="title" content="Michal Szeniak - portfolio" />
        <meta name="description" content="Michal Szeniak - portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.michalszeniak.pl/" />
        <meta property="og:title" content="Michal Szeniak - portfolio" />
        <meta property="og:description" content="Michal Szeniak - portfolio" />
        <meta property="og:image" content="/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.michalszeniak.pl/" />
        <meta property="twitter:title" content="Michal Szeniak - portfolio" />
        <meta
          property="twitter:description"
          content="Michal Szeniak - portfolio"
        />
        <meta property="twitter:image" content="/og.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
