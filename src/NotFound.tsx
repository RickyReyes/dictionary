import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="not-found">
      <div className="not-found__emoji">😕</div>
      <strong className={`not-found__heading ${theme}`}>
        No Definitions Found
      </strong>
      <p className="not-found__p">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </section>
  );
};

export default NotFound;
