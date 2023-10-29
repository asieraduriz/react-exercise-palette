import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Flashcard } from "../../src/Flashcard";

const ANSWER = "abrakadabra";
const args = {
  type: "guess",
  answer: ANSWER,
};

export default {
  title: "Flashcard/Guess",
  component: Flashcard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    background: "dark",
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  argTypes: {
    //   backgroundColor: { control: "color" },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

const WordTyper = async (word, canvas) => {
  for (let index = 0; index < word.length; index++) {
    const letter = word[index];

    await waitFor(async () => {
      await expect(canvas.getAllByRole("term")[index]).toHaveFocus();
      await userEvent.keyboard(letter);
    });
  }
};

export const Default = { args };

export const NotGuessed = {
  args,
  play: async ({ canvasElement }) => {
    const notGuessedWord = args.answer.replaceAll(/./g, "z");

    const canvas = within(canvasElement);

    await WordTyper(notGuessedWord, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const letters = canvas.getAllByRole("term");

    await waitFor(() => {
      letters.forEach((letter) => expect(letter).toBeEnabled());
      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const HalfGuessedHalfWrong = {
  args,
  play: async ({ canvasElement }) => {
    const notGuessedWord = args.answer.replace("abra", "zzzz");

    const canvas = within(canvasElement);

    await WordTyper(notGuessedWord, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const incorrectLetters = canvas.getAllByRole("term");
    const correctLetters = incorrectLetters.splice(4);

    await waitFor(() => {
      incorrectLetters.forEach((letter) => expect(letter).toBeEnabled());
      correctLetters.forEach((letter) => expect(letter).toBeDisabled());

      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const HalfGuessedHalfMissed = {
  args,
  play: async ({ canvasElement }) => {
    const notGuessedWord = "kadabraabra";

    const canvas = within(canvasElement);

    await WordTyper(notGuessedWord, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const incorrectLetters = canvas.getAllByRole("term");
    const correctLetters = incorrectLetters.splice(4);

    await waitFor(() => {
      incorrectLetters.forEach((letter) => expect(letter).toBeEnabled());
      correctLetters.forEach((letter) => expect(letter).toBeDisabled());

      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const HalfGuessedExtraRepeated = {
  args,
  play: async ({ canvasElement }) => {
    const notGuessedWord = "kbbakbbabba";

    const canvas = within(canvasElement);

    await WordTyper(notGuessedWord, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const incorrectLetters = canvas.getAllByRole("term");
    const correctLetters = incorrectLetters.splice(4);

    await waitFor(() => {
      incorrectLetters.forEach((letter) => expect(letter).toBeEnabled());
      correctLetters.forEach((letter) => expect(letter).toBeDisabled());

      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const GuessedAndMissed = {
  args,
  play: async ({ canvasElement }) => {
    const word = "bbrrkzdzbzz";

    const canvas = within(canvasElement);

    await WordTyper(word, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const incorrectLetters = canvas.getAllByRole("term");
    const correctLetters = incorrectLetters.splice(4);

    await waitFor(() => {
      incorrectLetters.forEach((letter) => expect(letter).toBeEnabled());
      correctLetters.forEach((letter) => expect(letter).toBeDisabled());

      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const Guessed = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await WordTyper(args.answer, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const letters = canvas.getAllByRole("term");

    await waitFor(() => {
      letters.forEach((letter) => expect(letter).toBeDisabled());
      expect(
        canvas.getByRole("guessed-check", { hidden: true })
      ).not.toBeVisible();
    });
  },
};
