
import { Check, Palette } from "lucide-react";
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
  const [theme, setTheme] = useState("nord"); // Default to Nord

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "nord"; // Default to Nord
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const selectedTheme = themes[themeName];
    if (!selectedTheme) return;

    const root = document.documentElement;
    
    // Apply all theme properties
    Object.entries(selectedTheme).forEach(([key, value]) => {
      if (key === "name") return;
      
      // Convert hex to RGB
      const hex = value.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      root.style.setProperty(`--${key}`, `${r} ${g} ${b}`);
    });

    // Force a refresh of components by temporarily removing and re-adding the theme-refresh class
    document.body.classList.remove("theme-refresh");
    void document.body.offsetWidth; // Trigger a reflow
    document.body.classList.add("theme-refresh");

    // Apply theme colors directly to common elements to ensure they update
    const applyColorToElements = () => {
      // Apply to all text elements for compatibility
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, li, td, th, button, a');
      textElements.forEach(el => {
        // Only update elements that aren't explicitly styled
        if (!el.getAttribute('style') && !el.classList.contains('preserve-color')) {
          (el as HTMLElement).style.color = '';  // Reset to use CSS variables
        }
      });
      
      // Create an event for custom components to listen to
      window.dispatchEvent(new CustomEvent('themechange', { 
        detail: { theme: themeName } 
      }));
    };
    
    // Apply immediately and after a short delay to catch any lagging renders
    applyColorToElements();
    setTimeout(applyColorToElements, 50);
    setTimeout(applyColorToElements, 150);

    localStorage.setItem("theme", themeName);
    setTheme(themeName);
    toast(`Theme changed to ${selectedTheme.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="text-[hsl(var(--foreground))]">{themes[theme]?.name || "Select theme"}</span>
          </div>
          <span 
            className="ml-2 h-4 w-4 rounded-full" 
            style={{ backgroundColor: themes[theme]?.primary }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(themes).map(([themeKey, themeValue]) => (
          <DropdownMenuItem
            key={themeKey}
            onClick={() => applyTheme(themeKey)}
            className="flex items-center justify-between gap-2"
          >
            <span>{themeValue.name}</span>
            <div className="flex items-center">
              {theme === themeKey && <Check className="h-4 w-4 mr-1" />}
              <span 
                className="h-4 w-4 rounded-full" 
                style={{ backgroundColor: themeValue.primary }}
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
