/**
 * Given a word, returns an object representation of each letter count
 * Skipping -
 *
 * @param {string} word
 * @returns {Object<string, number>}
 */
export const wordCounter = (word) =>
  [...word.replace(/-/g, "")].reduce((counter, char) => {
    counter[char] = (counter[char] || 0) + 1;
    return counter;
  }, {});
