import magnifyingGlass from "/assets/images/icon-search.svg";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

import { IWord } from "../../App";
interface Props {
  setWordObj: Dispatch<SetStateAction<IWord | null>>;
  searching: boolean;
  setSearching: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const Input = ({
  setWordObj,
  searching,
  setSearching,
  inputValue,
  setInputValue,
}: Props) => {
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearching(true);
          }
        }}
        className="input"
        placeholder="Search for any word..."
      />
      <img
        className="input__icon"
        src={magnifyingGlass}
        alt="magnifying glass icon"
        onClick={() => setSearching(true)}
      />
    </div>
  );
};

export default Input;
