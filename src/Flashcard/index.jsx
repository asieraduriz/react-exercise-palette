import PropTypes from "prop-types";
import { Guess } from "./Guess";
import { Fade } from "./Fade";
import { Flip } from "./Flip";

/**
 * Flashcard
 */
export const Flashcard = ({ answer, type }) => {
  return {
    fade: <Fade answer={answer} />,
    flip: <Flip answer={answer} />,
    guess: <Guess answer={answer} />,
  }[type];
};

Flashcard.propTypes = {
  /**
   * Answer
   */
  answer: PropTypes.string.isRequired,
  /**
   * Type
   */
  type: PropTypes.oneOf(["fade", "flip", "guess"]),
};

Flashcard.defaultProps = {
  answer: "Answer",
  type: "flip",
};
