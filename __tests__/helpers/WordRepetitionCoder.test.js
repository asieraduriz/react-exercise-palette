import { wordRepetitionCoder } from "../../src/helpers";

describe("Word Repetition Coder", () => {
  test.each`
    actual       | expected     | result
    ${"zzzzz"}   | ${"apple"}   | ${"bbbbb"}
    ${"apple"}   | ${"apple"}   | ${"ggggg"}
    ${"alpez"}   | ${"apple"}   | ${"gygyb"}
    ${"ppzel"}   | ${"apple"}   | ${"ygbyy"}
    ${"pppel"}   | ${"apple"}   | ${"bggyy"}
    ${"p-pp-el"} | ${"a-pp-le"} | ${"bggggyy"}
    ${"a-e"}     | ${"a-e"}     | ${"ggg"}
    ${"a-e"}     | ${"e-a"}     | ${"ygy"}
  `(
    "when matching $actual and $expected, the word tag is $result",
    ({ actual, expected, result }) => {
      const receivedTags = wordRepetitionCoder(actual, expected);

      expect(receivedTags).toEqual(result.split(""));
    }
  );
});
