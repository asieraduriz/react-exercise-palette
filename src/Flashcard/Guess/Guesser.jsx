import classNames from "classnames";
import PropTypes from "prop-types";
import { createRef, useEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks";

const LETTER_PATTERN = /[a-zA-Z]/;

export const Guesser = ({ answer }) => {
  const { isToggled, toggle, off } = useToggle();
  const [input, setInput] = useState(Array.from(answer).fill(""));
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
    const inputMatchesAnswer = input.join("") === answer;

    setIsGuessed(inputMatchesAnswer);
    toggle();
  };

  return (
    <div className="guesser">
      {inputRefs.map((ref, index) => {
        const isDash = answer[index] === "-";

        const isLetterGuessed = isToggled && answer[index] === input[index];

        return (
          <input
            ref={ref}
            key={index}
            role={isDash ? "contentinfo" : "term"}
            className={classNames({
              "guessed-correctly": isLetterGuessed,
            })}
            type="text"
            size={2}
            disabled={isDash || isGuessed || isLetterGuessed}
            value={isDash ? "-" : input[index]}
            onChange={(event) => {
              off();
              const letter = event.target.value.slice(-1);
              if (!LETTER_PATTERN.test(letter)) return;

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
          {isToggled ? "Retry" : "Check"}
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
