import { LETTER_STATE } from "../../src/Flashcard/Guess/Letter";

const guessedNone = {
  actual: "zzzzz",
  expected: "apple",
  result: [
    LETTER_STATE.nowhere,
    LETTER_STATE.nowhere,
    LETTER_STATE.nowhere,
    LETTER_STATE.nowhere,
    LETTER_STATE.nowhere,
  ],
};

const allGuessed = {
  actual: "apple",
  expected: "apple",
  result: [
    LETTER_STATE.guessed,
    LETTER_STATE.guessed,
    LETTER_STATE.guessed,
    LETTER_STATE.guessed,
    LETTER_STATE.guessed,
  ],
};

const guessedAndMissed = {
  actual: "ppzel",
  expected: "apple",
  result: [
    LETTER_STATE.elsewhere,
    LETTER_STATE.guessed,
    LETTER_STATE.nowhere,
    LETTER_STATE.elsewhere,
    LETTER_STATE.elsewhere,
  ],
};

const guessedAndMissedWithDash = {
  actual: "pppel", // When typing, dashes are provided by component, we don't need to simulate a dash
  expected: "a-pp-le",
  result: [
    LETTER_STATE.nowhere,
    LETTER_STATE.guessed,
    LETTER_STATE.guessed,
    LETTER_STATE.elsewhere,
    LETTER_STATE.elsewhere,
  ],
};

const allGuessedWithDash = {
  actual: "a-e",
  expected: "a-e",
  result: [LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed],
};

export {
  guessedNone,
  allGuessed,
  guessedAndMissed,
  guessedAndMissedWithDash,
  allGuessedWithDash,
};
