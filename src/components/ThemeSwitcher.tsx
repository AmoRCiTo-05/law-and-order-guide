
import { Check } from "lucide-react";
import { themes } from "@/lib/themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("aurum");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "aurum";
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const selectedTheme = themes[themeName];
    if (!selectedTheme) return;

    const root = document.documentElement;
    Object.entries(selectedTheme).forEach(([key, value]) => {
      if (key === "name") return;
      
      // Convert hex to RGB
      const hex = value.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      root.style.setProperty(`--${key}`, `${r} ${g} ${b}`);
    });

    localStorage.setItem("theme", themeName);
    setTheme(themeName);
    toast(`Theme changed to ${selectedTheme.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          {themes[theme]?.name || "Select theme"}
          <span className="ml-2 h-4 w-4 rounded-full" style={{ backgroundColor: themes[theme]?.primary }} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(themes).map(([themeKey, themeValue]) => (
          <DropdownMenuItem
            key={themeKey}
            onClick={() => applyTheme(themeKey)}
            className="flex items-center justify-between"
          >
            {themeValue.name}
            {theme === themeKey && <Check className="h-4 w-4" />}
            <span className="ml-2 h-4 w-4 rounded-full" style={{ backgroundColor: themeValue.primary }} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
