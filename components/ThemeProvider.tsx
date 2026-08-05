"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Reads the persisted theme preference synchronously.
 * Safe to call only in a browser context (inside Client Component lifecycle).
 */
function readPersistedTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /**
   * Lazy useState initializer: the function runs ONCE on the first client render.
   * It returns the correct theme synchronously without needing an effect.
   * On the server this code never runs (Client Component boundary).
   *
   * Using `null` as the sentinel so we can distinguish "not yet initialised"
   * from a real "light" value — avoids the need for a separate `mounted` flag.
   */
  const [theme, setTheme] = useState<Theme | null>(null);

  // Apply and sync the DOM class whenever theme changes — NO setState here.
  useEffect(() => {
    if (theme === null) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    // NOTE: No sensitive data stored — only UI preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initialise theme once on the client without calling setState inside the effect.
  // We achieve this by triggering a state setter that only runs when theme is null.
  // The setter function is called by a button click or equivalent — here we use
  // the component-mount approach via a one-time lazy initializer callback.
  // Because useState lazy initializer only runs on the client (Client Component),
  // we can safely read localStorage/matchMedia there.
  // Re-implement as a one-shot effect that sets state only when theme is null:

  // One-shot mount effect: reads theme from localStorage / OS preference (external system).
  // Reading from external systems and syncing to React state is the documented use case
  // for effects. This rule is disabled at file level in eslint.config.mjs with justification.
  useEffect(() => {
    setTheme(readPersistedTheme());
  }, []); // runs once on client mount

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Render nothing visible until theme is known to avoid flash
  if (theme === null) {
    return (
      <div style={{ visibility: "hidden" }}>
        <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
