import { render } from "@testing-library/react";
import { Flashcard } from "../../src/Flashcard";

describe("App", () => {
  it("renders App component", async () => {
    const { container } = render(<Flashcard type="flip" />);
    expect(container).toBeInTheDocument();
  });
});
