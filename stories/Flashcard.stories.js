import { Flashcard } from "../src/Flashcard";

export default {
  title: "Flashcard",
  component: Flashcard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    background: "dark",
  },
  argTypes: {
    type: {
      options: ["flip", "fade", "guess"],
      control: { type: "radio" },
    },
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export const Flip = {
  args: {
    type: "flip",
    answer: "answer",
  },
};

export const Fade = {
  args: {
    type: "fade",
    answer: "answer",
  },
};

export const Guess = {
  args: {
    type: "guess",
    answer: "answer",
  },
};
