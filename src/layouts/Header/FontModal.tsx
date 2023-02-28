import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  RefObject,
} from "react";

import { ThemeContext } from "../../themeContext";

interface FontModalProps {
  setFont: Dispatch<SetStateAction<string>>;
  setShowFontModal: Dispatch<SetStateAction<boolean>>;
}

const FontModal = ({ setFont, setShowFontModal }: FontModalProps) => {
  const { theme } = useContext(ThemeContext);
  let fontModalRef = useRef<HTMLUListElement>(null);

  // Close FontModal if user clicks outside of it.
  function useClickOutside(
    ref: RefObject<HTMLUListElement>,
    toggleFunc: Dispatch<SetStateAction<boolean>>,
    nameOfClass: string
  ) {
    useEffect(() => {
      let handler = (e: MouseEvent) => {
        const target = e.target as Element;
        console.log(target.classList);
        if (target && target.classList.contains(nameOfClass)) {
          toggleFunc(true);
        } else if (ref.current && !ref.current.contains(target)) {
          toggleFunc(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, []);
  }
  useClickOutside(fontModalRef, setShowFontModal, "font-modal");

  return (
    <ul ref={fontModalRef} className={`font-modal ${theme}`}>
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
