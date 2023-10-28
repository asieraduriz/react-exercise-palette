import { userEvent, waitFor, within } from "@storybook/testing-library";
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
  argTypes: {
    //   backgroundColor: { control: "color" },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Guess = {
  args: {
    type: "guess",
    answer: "answer",
  },
};

Guess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[0]).toHaveFocus();
  });

  await userEvent.keyboard("a");

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[1]).toHaveFocus();
    await userEvent.keyboard("n");
  });

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[2]).toHaveFocus();
    await userEvent.keyboard("s");
  });

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[3]).toHaveFocus();
    await userEvent.keyboard("w");
  });

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[4]).toHaveFocus();
    await userEvent.keyboard("e");
  });

  await waitFor(async () => {
    await expect(canvas.getAllByRole("term")[5]).toHaveFocus();
    await userEvent.keyboard("r");
  });

  await waitFor(async () => {
    await expect(canvas.getByRole("guessed-check")).toHaveFocus();

    await userEvent.click(canvas.getByRole("guessed-check"));
  });

  const letters = canvas.getAllByRole("term");

  await waitFor(() => {
    letters.forEach((letter) => expect(letter).toBeDisabled());
    expect(
      canvas.getByRole("guessed-check", { hidden: true })
    ).not.toBeVisible();
  });
};
