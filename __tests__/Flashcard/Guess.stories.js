import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Flashcard } from "../../src/Flashcard";
import {
  allGuessed,
  guessedAndMissed,
  guessedAndMissedWithDash,
  guessedNone,
} from "./Guess.words";

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

const AssessResult = async (result, canvas) => {
  const letters = canvas.getAllByRole("term");

  await waitFor(() => {
    letters.forEach((letter, index) => {
      expect(letter).toHaveAttribute("data-guessed-state", result[index]);
    });
  });
};

export const Default = {
  args: {
    type: "guess",
    answer: "apple",
  },
};

export const DefaultWithDashedWord = {
  args: {
    type: "guess",
    answer: "a-pple",
  },
};

export const GuessedNone = {
  args: {
    type: "guess",
    answer: guessedNone.expected,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await WordTyper(guessedNone.actual, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    await AssessResult(guessedNone.result, canvas);
    expect(canvas.getByRole("guessed-check")).toBeVisible();
  },
};

export const GuessedAndMissed = {
  args: {
    type: "guess",
    answer: guessedAndMissed.expected,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await WordTyper(guessedAndMissed.actual, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    await AssessResult(guessedAndMissed.result, canvas);

    expect(canvas.getByRole("guessed-check")).toBeVisible();
  },
};

export const GuessedAndMissedWithDash = {
  args: {
    type: "guess",
    answer: guessedAndMissedWithDash.expected,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await WordTyper(guessedAndMissedWithDash.actual, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    await AssessResult(guessedAndMissedWithDash.result, canvas);

    expect(canvas.getByRole("guessed-check")).toBeVisible();
  },
};

export const AllGuessed = {
  args: {
    type: "guess",
    answer: allGuessed.expected,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await WordTyper(allGuessed.actual, canvas);

    await waitFor(async () => {
      await userEvent.click(canvas.getByRole("guessed-check"));
    });

    await AssessResult(allGuessed.result, canvas);

    expect(
      canvas.getByRole("guessed-check", { hidden: true })
    ).not.toBeVisible();
  },
};
