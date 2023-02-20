import { IWord } from "./App";

interface WordProps {
  wordObj: IWord | null;
}

const Word = ({ wordObj }: WordProps) => {
  let audio: HTMLAudioElement;
  if (wordObj?.phonetics) {
    for (let obj of wordObj?.phonetics) {
      if (obj.audio) {
        audio = new Audio(obj.audio);
      }
    }
  }
  return (
    <section className="word">
      <div className="word__flex">
        <h1 className="word__word">{wordObj?.word}</h1>
        <small className="word__phonetic">{wordObj?.phonetic}</small>
      </div>

      <img
        onClick={() => audio?.play()}
        className="word__play-icon"
        src="/assets/images/icon-play.svg"
        alt="play icon"
      />
    </section>
  );
};

export default Word;
