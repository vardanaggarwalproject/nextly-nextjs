"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center order-last">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span className="sr-only">Toggle theme</span>
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
