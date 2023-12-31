import classNames from "classnames";
import PropTypes from "prop-types";
import { useToggle } from "../../hooks";
import "./styles.css";

export const FlipFlashcard = ({ answer }) => {
  const { isToggled, toggle } = useToggle();

  const className = classNames("flip-card-inner", {
    "flip-card-inner-reveal": isToggled,
  });

  return (
    <div className="flip-card">
      <div className={className} onClick={toggle} role="flashcard-clue">
        <div className="flip-card-front"></div>
        <div className="flip-card-back text-red-500" role="flashcard-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

FlipFlashcard.propTypes = {
  answer: PropTypes.string,
};

FlipFlashcard.defaultProps = {
  answer: "",
};
