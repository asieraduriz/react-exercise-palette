import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useToggle } from "../../hooks";

const LETTER_PATTERN = /[a-zA-Z]/;

export const Guesser = ({ answer }) => {
  const [input, setInput] = useState(Array.from(answer).fill(""));
  const { isToggled, toggle } = useToggle();
  const inputRefs = Array.from({ length: answer.length }, () => useRef(""));

  const checkButtonRef = useRef();

  return (
    <div className="guesser">
      {inputRefs.map((ref, index) => (
        <input
          ref={ref}
          key={index}
          type="text"
          size={2}
          disabled={answer[index] === "-"}
          value={answer[index] === "-" ? "-" : input[index]}
          onChange={(event) => {
            const letter = event.target.value.slice(-1);

            const matches = LETTER_PATTERN.test(letter);
            if (!matches) return;

            const newInput = Array.from(input);
            newInput.splice(index, 1, letter);
            setInput(newInput);

            const position = index + 1;
            if (position === answer.length) checkButtonRef.current.focus();
            else inputRefs[position].current.focus();
          }}
        />
      ))}
      <button ref={checkButtonRef} onClick={toggle}>
        {isToggled ? "Clear" : "Check"}
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
