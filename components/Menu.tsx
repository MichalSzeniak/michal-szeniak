import { motion, useCycle } from "framer-motion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
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

const Menu = () => {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <Sheet modal={false}>
      <SheetTrigger>
        {/* <Button variant="outline" size="icon">
          <Menu />
        </Button> */}
        <motion.div animate={isOpen ? "open" : "closed"}>
          <MenuToggle
            toggle={() => toggleOpen()}
            className="z-100 absolute right-6 top-6 "
          />
        </motion.div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <ul className="mb-0 flex flex-col gap-5 pt-10 ">
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
                      className={`link w-full font-nunito text-xl ${
                        pathname === item.href ? "font-bold text-primary" : ""
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
export default Menu;
