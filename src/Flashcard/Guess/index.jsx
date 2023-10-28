import classNames from "classnames";
import PropTypes from "prop-types";
import { useToggle } from "../../hooks";
import { Guesser } from "./Guesser";
import "./styles.css";

export const Guess = ({ answer }) => {
  const { toggle } = useToggle();

  return (
    <div className="guess-card" onClick={toggle} role="flashcard">
      <div className={classNames("guess-card-material")} />
      <Guesser answer={answer} />
    </div>
  );
};

Guess.propTypes = {
  answer: PropTypes.string,
};

Guess.defaultProps = {
  answer: "",
};
