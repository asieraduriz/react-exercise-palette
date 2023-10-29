import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Flashcard } from "../../src/Flashcard";

export default {
  title: "Flashcard",
  component: Flashcard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    background: "dark",
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //   backgroundColor: { control: "color" },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Flip = {
  args: {
    type: "flip",
    answer: "answer",
  },
};

Flip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("flashcard-clue"));

  await expect(canvas.getByRole("flashcard-answer")).toBeVisible();
};
