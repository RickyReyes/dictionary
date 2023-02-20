import magnifyingGlass from "/assets/images/icon-search.svg";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

import { IWord } from "../../App";
interface Props {
  setWordObj: Dispatch<SetStateAction<IWord | null>>;
}

const Input = ({ setWordObj }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {
    if (searching && inputValue.length > 0) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then((res) => res.json())
        .then((data) => setWordObj(data[0]))
        .catch((error) => console.log(error));
    }
  }, [searching]);

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder="Search for any word..."
      />
      <img
        className="input__icon"
        src={magnifyingGlass}
        alt="magnifying glass icon"
        onClick={() => setSearching((prev) => !prev)}
      />
    </div>
  );
};

export default Input;
