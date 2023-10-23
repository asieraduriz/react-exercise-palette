import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useToggle } from "../../hooks";

const LETTER_PATTERN = /[A-Za-z-]+/g;

export const Guesser = ({ answer }) => {
  const [input, setInput] = useState(Array.from(answer).fill(""));
  const { isToggled, toggle } = useToggle();
  const inputRefs = Array.from({ length: answer.length }, () => useRef(""));

  const checkButtonRef = useRef();

  const moveToNext = (position) => {
    if (position === answer.length) checkButtonRef.current.focus();
    else inputRefs[position].current.focus();
  };

  return (
    <div className="guesser">
      {inputRefs.map((_, index) => (
        <input
          ref={inputRefs[index]}
          key={index}
          type="text"
          defaultValue={input[index]}
          maxLength={1}
          size={3}
          onKeyDown={(e) => {
            const letter = e.key;
            if (!LETTER_PATTERN.test(letter)) return;

            const newInput = Array.from(input);
            newInput.splice(index, 1, e.target.value);
            setInput(newInput);
            inputRefs[index].current = e.target.value;
            moveToNext(index + 1);
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
