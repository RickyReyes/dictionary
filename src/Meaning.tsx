import React from "react";
import { IMeaning } from "./App";

interface MeaningProps {
  meaning: IMeaning;
}
const Meaning = ({ meaning }: MeaningProps) => {
  let { partOfSpeech, definitions, synonyms, antonyms } = meaning;
  return (
    <section className="meaning">
      <h2 className="meaning__part-of-speech">{partOfSpeech}</h2>
      <h3 className="meaning__heading">Meaning</h3>
      <ul className="meaning__definitions">
        {definitions.map(({ definition, example }) => (
          <li key={definition} className="meaning__definition">
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
              <strong key={synonym} className="meaning__synonym">
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
              <strong key={antonym} className="meaning__synonym">
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
