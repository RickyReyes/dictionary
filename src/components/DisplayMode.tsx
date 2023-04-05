import moon from "/assets/images/icon-moon.svg";

import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext";

const DisplayMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`display-mode ${theme}`}>
      <div
        className={`display-mode__pill ${theme}`}
        onClick={() => toggleTheme()}
      >
        <div className={`display-mode__pill__circle ${theme}`}></div>
      </div>
      <img
        className={`display-mode__moon ${theme}`}
        src={moon}
        alt="moon icon"
      />
    </div>
  );
};

export default DisplayMode;
