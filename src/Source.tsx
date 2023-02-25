import { IWord } from "./App";

interface WordProps {
  wordObj: IWord | null;
}
const Source = ({ wordObj }: WordProps) => {
  return (
    <section className="source">
      <h3 className="source__heading">Source</h3>
      <ul className="source__ul">
        {wordObj?.sourceUrls.map((url: string) => (
          <li className="source__item" key={url}>
            <a target="_blank" className="source__item__link" href={url}>
              {url}
              <img
                className="source__item__icon"
                src="/assets/images/icon-new-window.svg"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Source;
