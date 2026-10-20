import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components -- context + hook colocated by design
const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

const THEME_ANIM_MS = 350;

function readInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("gallium-theme");
  if (stored === "light" || stored === "dark") return stored;
  // Default to dark (Matte Slate) unless the OS explicitly prefers light
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);
  const animTimer = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
    window.localStorage.setItem("gallium-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    // Arm the palette cross-fade, then flush styles so the transition is
    // already active before the dark/light class swap lands in the effect.
    root.classList.add("theme-anim");
    void root.offsetWidth;
    setTheme((t) => (t === "dark" ? "light" : "dark"));

    if (animTimer.current) window.clearTimeout(animTimer.current);
    animTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-anim");
    }, THEME_ANIM_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(animTimer.current), []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
