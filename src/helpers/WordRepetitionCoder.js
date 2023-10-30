import { LETTER_STATE } from "../Flashcard/Guess/Letter";
import { letterFrequencyIn } from "./WordFrequency";

/**
 * Given two words, returns an array representation of each letter tagged
 *
 * @param {string} actual The guessed word
 * @param {string} answer The expected answer
 * @returns {Array<'b'| 'y' | 'g'>}
 */

export const wordRepetitionCoder = (actual, answer) => {
  const countedLettersInAnswer = letterFrequencyIn(answer);
  const wordTag = Array(actual.length);

  actual.split("").forEach((actualLetter, index) => {
    const expectedLetter = answer[index];
    if (actualLetter === expectedLetter) {
      wordTag[index] = LETTER_STATE.guessed;
      countedLettersInAnswer[expectedLetter] -= 1;
    }

    if (!answer.includes(actualLetter)) {
      wordTag[index] = LETTER_STATE.nowhere;
    }
  });

  actual.split("").forEach((letter, index) => {
    if (wordTag[index]) return;

    const isRepeated = countedLettersInAnswer[letter] > 0;
    wordTag[index] = isRepeated ? LETTER_STATE.elsewhere : LETTER_STATE.nowhere;
  });

  return wordTag;
};
