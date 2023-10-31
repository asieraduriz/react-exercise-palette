import classNames from "classnames";
import PropTypes from "prop-types";
import { createRef, useEffect, useRef, useState } from "react";
import { LETTER_PATTERN, LETTER_STATE } from "./Letter";
import { useToggle } from "../../hooks";
import { DashedLetter } from "./DashedLetter";
import { wordRepetitionCoder } from "../../helpers";

/**
 *
 * @param {string} text
 * @returns {Array<string>} An array of empty characters maintaining the dashes
 */
const emptyListKeepingDashes = (text) =>
  Array.from(text, (c) => (c === "-" ? "-" : ""));

const letterIsGuessed = (code) => code === LETTER_STATE.guessed;

/**
 * @param {Object} props
 * @param {string} props.answer The string representation of the answer to guess
 */
export const Guesser = ({ answer }) => {
  const { isToggled: isGuessing, toggle, on: setGuessing } = useToggle(true);
  const [input, setInput] = useState(emptyListKeepingDashes(answer));

  const [guessingCodes, setGuessingCodes] = useState(Array(answer.length));

  const inputRefs = Array.from(answer, () => createRef());
  const checkButtonRef = useRef();

  const [isGuessed, setIsGuessed] = useState(false);

  const moveTo = (position) => {
    if (position === answer.length) {
      checkButtonRef.current.focus();
      return;
    }

    if (inputRefs[position].current.disabled) return moveTo(position + 1);

    inputRefs[position].current.focus();
  };

  useEffect(() => {
    inputRefs[0].current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const check = () => {
    const codes = wordRepetitionCoder(input.join(""), answer);
    setGuessingCodes(codes);
    setIsGuessed(codes.every(letterIsGuessed));
    toggle();
  };

  return (
    <div className="guesser">
      {inputRefs.map((ref, index) => {
        const isDash = answer[index] === "-";

        if (isDash) {
          return (
            <DashedLetter key={index} isGuessing={isGuessing} letterRef={ref} />
          );
        }

        return (
          <input
            ref={ref}
            key={index}
            role="term"
            data-guessed-state={
              isGuessing
                ? LETTER_STATE.guessing
                : LETTER_STATE[guessingCodes[index]]
            }
            type="text"
            size={2}
            onFocus={() => ref.current.select()}
            disabled={
              !isGuessing &&
              LETTER_STATE[guessingCodes[index]] === LETTER_STATE.guessed
            }
            value={input[index]}
            onChange={(event) => {
              const letter = event.target.value.slice(-1);
              if (!LETTER_PATTERN.test(letter)) return;
              setGuessing();

              const newInput = Array.from(input);
              newInput.splice(index, 1, letter);

              setInput(newInput);
              moveTo(index + 1);
            }}
          />
        );
      })}
      <div className={classNames({ hide: isGuessed })}>
        <button ref={checkButtonRef} onClick={check} role="guessed-check">
          {isGuessing ? "Check" : "Retry"}
        </button>
      </div>
    </div>
  );
};

Guesser.propTypes = {
  answer: PropTypes.string,
};

Guesser.defaultProps = {
  answer: "",
};
