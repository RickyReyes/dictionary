import FontModal from "./FontModal";
import arrow from "/assets/images/icon-arrow-down.svg";
import { Dispatch, SetStateAction, useContext } from "react";

import { ThemeContext } from "../../themeContext";

interface Props {
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
  showFontModal: boolean;
  setShowFontModal: Dispatch<SetStateAction<boolean>>;
}

const FontModalButton = ({
  font,
  setFont,
  showFontModal,
  setShowFontModal,
}: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={() => setShowFontModal((prev) => !prev)}
      className="font-modal-btn"
    >
      <p className={`font-modal-btn__font ${theme}`}>{font}</p>
      <img src={arrow} />
      {showFontModal && <FontModal setFont={setFont} />}
    </div>
  );
};

export default FontModalButton;
