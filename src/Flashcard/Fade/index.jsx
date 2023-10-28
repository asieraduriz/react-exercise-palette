import classNames from "classnames";
import PropTypes from "prop-types";
import { useToggle } from "../../hooks";
import "./styles.css";

export const Fade = ({ answer }) => {
  const { isToggled, toggle } = useToggle();
  return (
    <div className="fade-card" onClick={toggle} role="flashcard-clue">
      <div className={classNames("fade-card-material", { faded: isToggled })}>
        <div
          className={classNames("fade-card-answer", { hidden: !isToggled })}
          role="flashcard-answer"
        >
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
};

Fade.propTypes = {
  answer: PropTypes.string,
};

Fade.defaultProps = {
  answer: "",
};
