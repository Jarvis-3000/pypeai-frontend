"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light" || theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme} className="relative">
      <MoonStar className="hidden dark:block h-6 w-6" />
      <Sun className="dark:hidden h-6 w-6" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
