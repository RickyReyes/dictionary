import Header from "./layouts/Header/Header";
import Input from "./layouts/Input/Input";
import Word from "./Word";
import Source from "./Source";
import { useState, useEffect, useContext } from "react";
import Meaning from "./Meaning";
import NotFound from "./NotFound";
import { ThemeContext, IThemeContext } from "./themeContext";

export interface IWord {
  license: {
    name: string;
    url: string;
  };
  meanings: [IMeaning];
  phonetic?: string;
  phonetics: [
    {
      audio?: string;
      license?: {
        name: string;
        url: string;
      };
      sourceUrl?: string;
      text?: string;
    }
  ];
  sourceUrls: [string];
  word: string;
}

export interface IMeaning {
  antonyms: [];
  definitions: [
    {
      antonyms: [];
      definition: string;
      example?: string;
      synonyms: [];
    }
  ];
  partOfSpeech: string;
  synonyms: [];
}

function App() {
  const [font, setFont] = useState<string>("sans-serif");
  const [searching, setSearching] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [showFontModal, setShowFontModal] = useState<boolean>(false);

  const [wordObj, setWordObj] = useState<null | IWord>(null);

  useEffect(() => {
    if (searching && inputValue.length > 0 && wordObj?.word !== inputValue) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then((res) => {
          if (!res.ok) {
            setNotFound(true);
            throw new Error("No such word found.");
          } else {
            setNotFound(false);
            return res.json();
          }
        })
        .then((data) => setWordObj(data[0]))
        .catch((err) => {
          setNotFound(true);
          return err;
        });
      setSearching(false);
    }
  }, [searching]);

  const { theme } = useContext<IThemeContext>(ThemeContext);
  return (
    <main className={"App " + font}>
      <Header
        font={font}
        setFont={setFont}
        showFontModal={showFontModal}
        setShowFontModal={setShowFontModal}
      />
      <Input
        searching={searching}
        setSearching={setSearching}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setWordObj={setWordObj}
      />
      {searching && !wordObj && <p className="searching">Searching...</p>}
      {notFound && <NotFound />}
      {wordObj && (
        <>
          <Word wordObj={wordObj} />
          {wordObj?.meanings.map((meaning) => (
            <Meaning meaning={meaning} />
          ))}
          <hr></hr>
          <Source wordObj={wordObj} />
        </>
      )}
    </main>
  );
}

export default App;
