import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Flashcard } from "../../src/Flashcard";

export default {
  title: "Flashcard",
  component: Flashcard,
  parameters: {
    layout: "centered",
    background: "dark",
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Fade = {
  args: {
    type: "fade",
    answer: "answer",
  },
};

Fade.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(
    canvas.getByRole("flashcard-answer", { hidden: true })
  ).not.toBeVisible();

  await userEvent.click(canvas.getByRole("flashcard-clue"));

  await expect(canvas.getByRole("flashcard-answer")).toBeVisible();

  await userEvent.click(canvas.getByRole("flashcard-clue"));

  await expect(
    canvas.getByRole("flashcard-answer", { hidden: true })
  ).not.toBeVisible();
};
