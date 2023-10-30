import { LETTER_STATE } from "../../src/Flashcard/Guess/Letter";
import { wordRepetitionCoder } from "../../src/helpers";

describe("Word Repetition Coder", () => {
  test.each`
    actual       | expected     | result
    ${"zzzzz"}   | ${"apple"}   | ${[LETTER_STATE.nowhere, LETTER_STATE.nowhere, LETTER_STATE.nowhere, LETTER_STATE.nowhere, LETTER_STATE.nowhere]}
    ${"apple"}   | ${"apple"}   | ${[LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed]}
    ${"alpez"}   | ${"apple"}   | ${[LETTER_STATE.guessed, LETTER_STATE.elsewhere, LETTER_STATE.guessed, LETTER_STATE.elsewhere, LETTER_STATE.nowhere]}
    ${"ppzel"}   | ${"apple"}   | ${[LETTER_STATE.elsewhere, LETTER_STATE.guessed, LETTER_STATE.nowhere, LETTER_STATE.elsewhere, LETTER_STATE.elsewhere]}
    ${"pppel"}   | ${"apple"}   | ${[LETTER_STATE.nowhere, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.elsewhere, LETTER_STATE.elsewhere]}
    ${"p-pp-el"} | ${"a-pp-le"} | ${[LETTER_STATE.nowhere, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.elsewhere, LETTER_STATE.elsewhere]}
    ${"a-e"}     | ${"a-e"}     | ${[LETTER_STATE.guessed, LETTER_STATE.guessed, LETTER_STATE.guessed]}
    ${"a-e"}     | ${"e-a"}     | ${[LETTER_STATE.elsewhere, LETTER_STATE.guessed, LETTER_STATE.elsewhere]}
  `(
    "when matching $actual and $expected, the word tag is $result",
    ({ actual, expected, result }) => {
      const receivedTags = wordRepetitionCoder(actual, expected);

      expect(receivedTags).toEqual(result);
    }
  );
});
