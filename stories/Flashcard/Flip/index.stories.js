import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { FlipFlashcard } from "../../src/Flashcard";

export default {
  title: "Flashcard/Flip",
  component: FlipFlashcard,
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
    answer: "answer",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("flashcard-clue"));

    await expect(canvas.getByRole("flashcard-answer")).toBeVisible();
  },
};
