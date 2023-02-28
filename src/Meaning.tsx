import { Dispatch, SetStateAction, useContext } from "react";
import { IMeaning } from "./App";
import { ThemeContext } from "./themeContext";

interface MeaningProps {
  meaning: IMeaning;
  setInputValue: Dispatch<SetStateAction<string>>;
  setSearching: Dispatch<SetStateAction<boolean>>;
}
const Meaning = ({ meaning, setInputValue, setSearching }: MeaningProps) => {
  const { theme } = useContext(ThemeContext);
  let { partOfSpeech, definitions, synonyms, antonyms } = meaning;
  function handleSynonymAntonym(word: string) {
    setInputValue(word);
    setSearching(true);
  }
  return (
    <section className="meaning">
      <div className="meaning__pos-hr-flex">
        <h2 className="meaning__part-of-speech">{partOfSpeech}</h2>
        <hr className="meaning__hr"></hr>
      </div>
      <h3 className="meaning__heading">Meaning</h3>
      <ul className="meaning__definitions">
        {definitions.map(({ definition, example }) => (
          <li key={definition} className={`meaning__definition ${theme}`}>
            <span className="meaning__definition--span">{definition}</span>
            {example && (
              <div className="meaning__definition--example">
                &ldquo;{example}&rdquo;
              </div>
            )}
          </li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <section className="meaning__nyms">
          <h3 className="meaning__heading synonyms">Synonyms</h3>
          <ul className="meaning__synonyms--ul">
            {synonyms.map((synonym) => (
              <strong
                onClick={() => handleSynonymAntonym(synonym)}
                key={synonym}
                className="meaning__synonym"
              >
                {synonym}
              </strong>
            ))}
          </ul>
        </section>
      )}
      {antonyms.length > 0 && (
        <section className="meaning__nyms">
          <h3 className="meaning__heading synonyms">Antonyms</h3>
          <ul className="meaning__synonyms--ul">
            {antonyms.map((antonym) => (
              <strong
                onClick={() => handleSynonymAntonym(antonym)}
                key={antonym}
                className="meaning__synonym"
              >
                {antonym}
              </strong>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default Meaning;
