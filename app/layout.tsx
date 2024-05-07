import Link from "next/link";
import { reader } from "./reader";
import "./index.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
