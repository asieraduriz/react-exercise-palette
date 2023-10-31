import classNames from "classnames";
import PropTypes from "prop-types";
import { GuesserProvider } from "../../contexts/Guesser";
import { Check } from "./Check";
import { GuessedProgress } from "./GuessedProgress";
import { Guesser } from "./Guesser";
import "./styles.css";

export const Guess = ({ answer }) => {
  return (
    <div className="guess-card" role="flashcard">
      <div className={classNames("guess-card-material")} />
      <GuesserProvider answer={answer}>
        <GuessedProgress />
        <Guesser answer={answer} />
        <Check />
      </GuesserProvider>
    </div>
  );
};

Guess.propTypes = {
  answer: PropTypes.string,
};

Guess.defaultProps = {
  answer: "",
};
