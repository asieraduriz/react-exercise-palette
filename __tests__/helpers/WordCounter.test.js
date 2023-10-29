import { wordCounter } from "../../src/helpers/WordCounter";

describe("Word Counter", () => {
  test.each`
    word                | count
    ${"abrakadabra"}    | ${{ a: 5, b: 2, r: 2, k: 1, d: 1 }}
    ${"abra-kadabra"}   | ${{ a: 5, b: 2, r: 2, k: 1, d: 1 }}
    ${"-abra-ka-dabra"} | ${{ a: 5, b: 2, r: 2, k: 1, d: 1 }}
  `("decomposes $word into $count", ({ word, count }) => {
    const actualCount = wordCounter(word);

    expect(actualCount).toMatchObject(count);
  });
});
