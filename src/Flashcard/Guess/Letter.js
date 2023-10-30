/**
 * @typedef {Object} LetterState
 * @property {string} guessing - Enum for guessing property.
 * @property {string} guessed - Enum for guessed property.
 * @property {string} elsewhere - Enum for elsewhere property.
 * @property {string} nowhere - Enum for nowhere property.
 */
export const LETTER_STATE = {
  guessing: "guessing",
  guessed: "guessed",
  elsewhere: "elsewhere",
  nowhere: "nowhere",
};

export const LETTER_PATTERN = /[a-zA-Z]/;
