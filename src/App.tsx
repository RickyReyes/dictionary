import Header from "./layouts/Header";
import Input from "./layouts/Input";
import Word from "./components/Word";
import Source from "./Source";
import { useState, useEffect, useContext } from "react";
import Meaning from "./components/Meaning";
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

  const { theme } = useContext(ThemeContext);

  return (
    <main className={`App ${font} ${theme}`}>
      <div className="container">
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
        {notFound && <NotFound />}
        {wordObj && !notFound && (
          <>
            <Word wordObj={wordObj} />
            {wordObj?.meanings.map((meaning) => (
              <div>
                <Meaning
                  meaning={meaning}
                  setInputValue={setInputValue}
                  setSearching={setSearching}
                />
              </div>
            ))}
            <hr className={`hr ${theme}`}></hr>
            <Source wordObj={wordObj} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
