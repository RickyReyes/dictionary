import { createContext, useState } from "react";

export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => null,
});

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState<string>("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {props?.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
