import React from "react";
import { IMeaning } from "./App";

interface MeaningProps {
  meaning: IMeaning;
}
const Meaning = ({ meaning }: MeaningProps) => {
  let { partOfSpeech, definitions, synonyms } = meaning;
  return (
    <section className="meaning">
      <em className="meaning__part-of-speech">{partOfSpeech}</em>
      <h2 className="meaning__h2">Meaning</h2>
      <ul className="meaning__definitions">
        {definitions.map(({ definition }) => (
          <li className="meaning__definition">
            <span>{definition}</span>
          </li>
        ))}
      </ul>

      <h2 className="meaning__h2 synonyms">Synonyms</h2>
      <ul className="meaning__synonyms">
        {synonyms.map((synonym) => (
          <strong>{synonym}</strong>
        ))}
      </ul>
    </section>
  );
};

export default Meaning;
