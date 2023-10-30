import { render, screen } from "@testing-library/react";
import * as stories from "./Guess.stories";
import { composeStories } from "@storybook/react";

const { GuessedAndMissed } = composeStories(stories);

describe("Guessed And Missed", () => {
  it("renders App component", async () => {
    render(<GuessedAndMissed />);
    expect(screen.getByRole("guessed-check")).toBeVisible();
  });
});
