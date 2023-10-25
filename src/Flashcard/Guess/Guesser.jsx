import classNames from "classnames";
import PropTypes from "prop-types";
import { createRef, useRef, useState } from "react";
import { useToggle } from "../../hooks";

const LETTER_PATTERN = /[a-zA-Z]/;

export const Guesser = ({ answer }) => {
  const { isToggled, toggle } = useToggle();
  const [input, setInput] = useState(Array.from(answer).fill(""));
  const inputRefs = Array.from(answer, () => createRef());
  const checkButtonRef = useRef();

  const moveTo = (position) => {
    if (position === answer.length) {
      checkButtonRef.current.focus();
      return;
    }

    if (inputRefs[position].current.disabled) return moveTo(position + 1);

    inputRefs[position].current.focus();
  };

  return (
    <div className="guesser">
      {inputRefs.map((ref, index) => {
        const isDash = answer[index] === "-";

        const isLetterGuessed = isToggled && answer[index] === input[index];
        const isLetterElsewhere =
          isToggled &&
          !isLetterGuessed &&
          input[index] &&
          answer.includes(input[index]);

        return (
          <input
            ref={ref}
            key={index}
            className={classNames({
              "guessed-correctly": isLetterGuessed,
              exists: isLetterElsewhere,
            })}
            type="text"
            size={2}
            disabled={isDash}
            value={isDash ? "-" : input[index]}
            onChange={(event) => {
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
      <button ref={checkButtonRef} onClick={toggle}>
        {isToggled ? "Hide" : "Check"}
      </button>
    </div>
  );
};

Guesser.propTypes = {
  answer: PropTypes.string,
};

Guesser.defaultProps = {
  answer: "",
};
