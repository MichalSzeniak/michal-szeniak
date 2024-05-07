import Link from "next/link";
import "./index.css";
import { Inter as FontSans } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

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
        className={cn("min-h-screen bg-background font-sans antialiased ")}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
