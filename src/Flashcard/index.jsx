import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

/**
 * Flashcard
 */
export const Flashcard = ({ question, answer }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flashcard">
      <div className="flashcard-image"></div>
      <div className="question">{question}</div>
    </div>
  );
};

Flashcard.propTypes = {
  /**
   * Question
   */
  question: PropTypes.string.isRequired,
  /**
   * Answer
   */
  answer: PropTypes.string.isRequired,
};

Flashcard.defaultProps = {
  question: "Question",
  answer: "Answer",
};
