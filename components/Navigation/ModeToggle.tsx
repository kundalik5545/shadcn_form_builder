"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  return (
    <>
      <Button
        variant={isMobile ? "default" : "outline"}
        size={isMobile ? "default" : "icon"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full"
      >
        {isMobile && (theme === "light" ? "Dark Mode" : "Light Mode")}{" "}
        {theme === "dark" ? <Sun size={22} /> : <LuMoonStar size={22} />}
        {/* {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />} */}
      </Button>
    </>
  );
}

/**
 * The button shows "Dark Mode" when the current theme is light, and "Light Mode" when the current theme is dark.
 * The icon changes accordingly, showing a sun icon for dark mode and a moon icon for light mode.
 * On mobile devices, the button only shows the icon without text.
 * The button variant and size also change based on whether the device is mobile or not.
 * The useIsMobile hook is used to determine if the device is mobile.
 * The useTheme hook from next-themes is used to get the current theme and a function to change it.
 * The button has a rounded-full class for styling.
 * The button uses the Button component from the ui library for consistent styling.
 */
