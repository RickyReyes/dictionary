import React from "react";
import { IMeaning } from "./App";

interface MeaningProps {
  meaning: IMeaning;
}
const Meaning = ({ meaning }: MeaningProps) => {
  let { partOfSpeech, definitions, synonyms, antonyms } = meaning;
  console.log(meaning);
  return (
    <section className="meaning">
      <em className="meaning__part-of-speech">{partOfSpeech}</em>
      <h2 className="meaning__h2">Meaning</h2>
      <ul className="meaning__definitions">
        {definitions.map(({ definition, example }) => (
          <li className="meaning__definition">
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
          <h2 className="meaning__h2 synonyms">Synonyms</h2>
          <ul className="meaning__synonyms--ul">
            {synonyms.map((synonym) => (
              <strong className="meaning__synonym">{synonym}</strong>
            ))}
          </ul>
        </section>
      )}
      {antonyms.length > 0 && (
        <section className="meaning__nyms">
          <h2 className="meaning__h2 synonyms">Antonyms</h2>
          <ul className="meaning__synonyms--ul">
            {antonyms.map((antonym) => (
              <strong className="meaning__synonym">{antonym}</strong>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default Meaning;
