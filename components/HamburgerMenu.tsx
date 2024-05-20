import { motion, useCycle } from "framer-motion";

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
import { MenuToggle } from "./MenuToggle";
// import Footer from "@/components/Footer";

const data = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/posts",
    name: "Posts",
  },
  {
    href: "/links",
    name: "Links",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <Sheet modal={false}>
      <SheetTrigger className="sm:hidden">
        {/* <Button variant="outline" size="icon">
          <Menu />
        </Button> */}
        <motion.div animate={isOpen ? "open" : "closed"}>
          <MenuToggle
            toggle={() => toggleOpen()}
            className="absolute right-6 top-6 z-50 "
          />
        </motion.div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <ul className="flex flex-col gap-5 pt-10 mb-0 ">
            {data.map((item) => (
              <li>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 2,
                    opacity: {
                      ease: "easeInOut",
                      duration: 1,
                    },
                    y: {
                      duration: 0.5,
                    },
                  }}
                >
                  <SheetClose asChild>
                    <Button
                      variant="secondary"
                      asChild
                      className={`font-nunito link text-xl w-full ${
                        pathname === item.href ? "text-primary font-bold" : ""
                      }`}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  </SheetClose>
                </motion.div>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default HamburgerMenu;
