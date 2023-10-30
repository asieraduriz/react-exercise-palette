import { bool, object } from "prop-types";
import { LETTER_STATE } from "./Letter";

export const DashedLetter = ({ isGuessing, letterRef }) => (
  <input
    ref={letterRef}
    role="contentinfo"
    data-guessed-state={
      isGuessing ? LETTER_STATE.guessing : LETTER_STATE.guessed
    }
    type="text"
    size={2}
    disabled
    defaultValue="-"
  />
);

DashedLetter.propTypes = {
  isGuessing: bool,
  letterRef: object,
};

DashedLetter.defaultProps = {
  isGuessing: false,
  letterRef: null,
};
