import logo from "/assets/images/logo.svg";

import FontModalButton from "../components/FontModalButton";
import DisplayMode from "../components/DisplayMode";
import { Dispatch, SetStateAction } from "react";

interface Props {
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
  showFontModal: boolean;
  setShowFontModal: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ font, setFont, showFontModal, setShowFontModal }: Props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="dictionary logo" />
      <FontModalButton
        font={font}
        setFont={setFont}
        showFontModal={showFontModal}
        setShowFontModal={setShowFontModal}
      />
      <div className="divider"></div>
      <DisplayMode />
    </header>
  );
};

export default Header;
