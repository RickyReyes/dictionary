import Header from "./layouts/Header/Header";
import Input from "./layouts/Input/Input";
import Word from "./Word";
import Source from "./Source";
import { useState } from "react";
import Meaning from "./Meaning";

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
  const [showFontModal, setShowFontModal] = useState<boolean>(false);
  const [font, setFont] = useState<string>("Mono");
  const [wordObj, setWordObj] = useState<null | IWord>(null);

  return (
    <main className={"App " + font}>
      <Header
        font={font}
        setFont={setFont}
        showFontModal={showFontModal}
        setShowFontModal={setShowFontModal}
      />
      <Input setWordObj={setWordObj} />
      {wordObj && <Word wordObj={wordObj} />}
      {wordObj?.meanings.map((meaning) => (
        <Meaning meaning={meaning} />
      ))}
      <hr></hr>
      <Source wordObj={wordObj} />
    </main>
  );
}

export default App;
