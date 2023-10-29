import { render, screen } from "@testing-library/react";
import * as stories from "./Guess.stories";
import { composeStories } from "@storybook/react";

const { NotGuessed } = composeStories(stories);

describe("Not Guessed", () => {
  it("renders App component", async () => {
    render(<NotGuessed />);
    expect(screen.getByRole("guessed-check")).toBeVisible();
  });
});
