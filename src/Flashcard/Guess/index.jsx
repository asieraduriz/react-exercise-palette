import classNames from "classnames";
import PropTypes from "prop-types";
import { Guesser } from "./Guesser";
import "./styles.css";

export const Guess = ({ answer }) => {
  return (
    <div className="guess-card" role="flashcard">
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
