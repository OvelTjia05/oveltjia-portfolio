import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-foreground/5 focus-visible:ring-0 focus-visible:ring-offset-0"
    >
      <Sun
        onClick={() => setTheme("dark")}
        className="h-8 w-8 rotate-0 scale-100 text-yellow-400 transition-all duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
