import { Dispatch, SetStateAction, useContext } from "react";

import { ThemeContext } from "../../themeContext";

interface Props {
  setFont: Dispatch<SetStateAction<string>>;
}

const FontModal = ({ setFont }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={`font-modal ${theme}`}>
      <li
        className="font-modal__font sans-serif"
        onClick={() => setFont("sans-serif")}
      >
        Sans Serif
      </li>
      <li className="font-modal__font serif" onClick={() => setFont("serif")}>
        Serif
      </li>
      <li className="font-modal__font mono" onClick={() => setFont("mono")}>
        Mono
      </li>
    </ul>
  );
};

export default FontModal;
