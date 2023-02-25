import FontModal from "./FontModal";
import arrow from "/assets/images/icon-arrow-down.svg";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <div
      onClick={() => setShowFontModal((prev) => !prev)}
      className="font-modal-btn"
    >
      <p className="font-modal-btn__font">{font}</p>
      <img src={arrow} />
      <FontModal
        setFont={setFont}
        showFontModal={showFontModal}
        setShowFontModal={setShowFontModal}
      />
    </div>
  );
};

export default FontModalButton;
