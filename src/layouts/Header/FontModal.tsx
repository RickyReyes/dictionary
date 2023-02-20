import { Dispatch, SetStateAction } from "react";

interface Props {
  setFont: Dispatch<SetStateAction<string>>;
  showFontModal: boolean;
  setShowFontModal: Dispatch<SetStateAction<boolean>>;
}

const FontModal = ({ setFont, showFontModal, setShowFontModal }: Props) => {
  return (
    <ul className={`font-modal ${showFontModal ? "show" : " "}`}>
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
