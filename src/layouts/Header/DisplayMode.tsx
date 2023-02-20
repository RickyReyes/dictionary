import moon from "/assets/images/icon-moon.svg";

import { useState } from "react";

const DisplayMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className="display-mode">
      <div
        className={`display-mode__pill ${darkMode ? "dark-mode" : ""}`}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <div
          className={`display-mode__pill__circle ${
            darkMode ? "dark-mode" : ""
          }`}
        ></div>
      </div>
      <img
        className={`display-mode__moon ${darkMode ? "dark-mode" : ""}`}
        src={moon}
        alt="moon icon"
      />
    </div>
  );
};

export default DisplayMode;
