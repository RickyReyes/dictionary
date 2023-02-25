import { createContext, useState } from "react";

export interface IThemeContext {
  theme: "light" | "dark";
}

const ThemeContext = createContext<IThemeContext>({ theme: "light" });

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState<IThemeContext>({ theme: "light" });
  return (
    <ThemeContext.Provider value={theme}>
      {props?.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
