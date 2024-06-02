import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";

const NavBar = () => {
  const menuList = ["Home", "Skills", "About", "Contact"];
  return (
    <NavigationMenu className="top-0 justify-between bg-secondary py-4 shadow max-lg:px-[15%] max-sm:px-6 lg:px-[20%]">
      <ModeToggle />
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="transition-transform duration-200 hover:scale-110 md:hidden">
            <Menu width={32} height={32} />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col px-4 py-2">
            {menuList.map((item) => (
              <NavigationMenuLink key={item} asChild>
                <Link
                  to="#skills"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  {item}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex gap-6 max-md:hidden">
          {menuList.map((item) => (
            <NavigationMenuLink key={item} asChild>
              <Link
                to="#skills"
                className="text-lg font-medium hover:text-blue-500"
              >
                {item}
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* <NavigationMenuViewport className="max-lg:right-[85%] max-sm:right-6 lg:right-[80%]" /> */}
    </NavigationMenu>
  );
};

export default NavBar;
