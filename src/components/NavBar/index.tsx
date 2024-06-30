import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const NavBar = () => {
  const menuList = ["Home", "Skills", "About", "Projects", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log("y", scrolled);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <NavigationMenu
      className={`fixed top-0 w-full justify-between duration-250 ease-in-out ${scrolled ? "bg-primary-foreground py-3 shadow" : "bg-transparent py-6"} max-lg:px-[15%] max-sm:px-6 lg:px-[20%]`}
    >
      <NavigationMenuList className="justify-between">
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="transition-transform hover:scale-110 md:hidden">
            <Menu width={32} height={32} />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-44 flex-col gap-2 px-4 py-2">
            {menuList.map((item) => (
              <NavigationMenuLink
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium transition-all hover:scale-105 hover:text-purple"
              >
                {item}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex gap-6 max-md:hidden">
          {menuList.map((item) => (
            <NavigationMenuLink
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium transition-all hover:scale-105 hover:text-purple"
            >
              {item}
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* <NavigationMenuViewport className="max-lg:right-[85%] max-sm:right-6 lg:right-[80%]" /> */}
    </NavigationMenu>
  );
};

export default NavBar;
