import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Flashcard } from "../../src/Flashcard";

const ANSWER = "abrakadabra";
const args = {
  type: "guess",
  answer: ANSWER,
};

const termState = {
  GUESSING: "guessing",
  g: "guessed",
  y: "elsewhere",
  b: "nowhere",
};

export default {
  title: "Flashcard/Guess",
  component: Flashcard,
  parameters: {
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

export const GuessedNone = {
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
      letters.forEach((letter) => {
        expect(letter).toBeEnabled();
        expect(letter).toHaveAttribute("data-guessed-state", termState.b);
      });
      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const GuessedAndMissed = {
  args,
  play: async ({ canvasElement }) => {
    const word = "bbrrkzdzbzz";
    const evaluatedWord = "bggygbgbgbb";

    const canvas = within(canvasElement);

    await WordTyper(word, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    const letters = canvas.getAllByRole("term");

    await waitFor(() => {
      letters.forEach((letter, index) => {
        expect(letter).toHaveProperty("disabled", evaluatedWord[index] === "g");
        expect(letter).toHaveAttribute(
          "data-guessed-state",
          termState[evaluatedWord[index]]
        );
      });

      expect(canvas.getByRole("guessed-check")).toBeVisible();
    });
  },
};

export const AllGuessed = {
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
      letters.forEach((letter) =>
        expect(letter).toHaveAttribute("data-guessed-state", termState.g)
      );

      expect(
        canvas.getByRole("guessed-check", { hidden: true })
      ).not.toBeVisible();
    });
  },
};
