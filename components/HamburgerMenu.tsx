import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
// import Footer from "@/components/Footer";

const HamburgerMenu = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <ul className="flex flex-col gap-5 pt-10 mb-0 ">
            <li>
              <SheetClose asChild>
                <Button
                  variant="secondary"
                  asChild
                  className={`font-nunito link text-xl w-full ${
                    pathname === "/" ? "text-primary font-bold" : ""
                  }`}
                >
                  <Link href={"/"}>Home</Link>
                </Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Button
                  variant="secondary"
                  asChild
                  className={`font-nunito link text-xl w-full ${
                    pathname === "/posts" ? "text-primary font-bold" : ""
                  }`}
                >
                  <Link href={"/posts"}>Posts</Link>
                </Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Button
                  variant="secondary"
                  asChild
                  className={`font-nunito link text-xl w-full ${
                    pathname === "/links" ? "text-primary font-bold" : ""
                  }`}
                >
                  <Link href={"/links"}>Links</Link>
                </Button>
              </SheetClose>
            </li>
            <li>
              {" "}
              <SheetClose asChild>
                <Button
                  variant="secondary"
                  asChild
                  className={`font-nunito link text-xl w-full ${
                    pathname === "/contact" ? "text-primary font-bold" : ""
                  }`}
                >
                  <Link href={"/contact"}>Contact</Link>
                </Button>
              </SheetClose>
            </li>
          </ul>
          <ModeToggle />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default HamburgerMenu;
