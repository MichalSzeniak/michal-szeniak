import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Mail, MenuIcon, Navigation, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const data = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/articles",
    name: "My articles",
  },
  {
    href: "/projects",
    name: "My projects",
  },
  {
    href: "/resume",
    name: "My resume",
  },
];

const Menu = () => {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useState(false);

  return (
    <nav>
      <DropdownMenu modal={false} open={isOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="icon"
            size="icon"
            onClick={() => toggleOpen((prev) => !prev)}
          >
            <MenuIcon className="h-10 w-10" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-80 bg-blue-500 bg-foreground  p-10 sm:w-96"
          sideOffset={-40}
          onInteractOutside={() => toggleOpen((prev) => !prev)}
        >
          <Button
            variant="icon"
            size="icon"
            className="absolute right-0 top-0 text-primary hover:text-blue-800"
            onClick={() => toggleOpen((prev) => !prev)}
          >
            <X className="h-10 w-10" />
          </Button>
          {data.map((item) => (
            <motion.div
              className="flex"
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              initial={{ opacity: 0, scale: 0.3, filter: "blur(10px)" }}
            >
              <DropdownMenuItem onClick={() => toggleOpen((prev) => !prev)}>
                <Button
                  variant="link"
                  asChild
                  className={`link w-full font-poppins text-xl text-secondary ${
                    pathname === item.href ? "font-bold text-primary" : ""
                  }`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </DropdownMenuItem>
            </motion.div>
          ))}

          <DropdownMenuSeparator />
          <motion.div
            className="flex"
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            initial={{ opacity: 0, scale: 0.3, filter: "blur(10px)" }}
          >
            <DropdownMenuItem onClick={() => toggleOpen((prev) => !prev)}>
              <Button
                variant="link"
                asChild
                className={`link w-full font-poppins text-sm text-secondary `}
              >
                <a
                  className="flex items-center gap-3 font-black transition-all hover:text-primary"
                  href="mailto:michal.szeniak@gmail.com"
                >
                  <Mail /> michal.szeniak@gmail.com
                </a>
              </Button>
            </DropdownMenuItem>
          </motion.div>

          {/* <ModeToggle /> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
export default Menu;
