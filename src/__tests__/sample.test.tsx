import { describe, it, expect } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("title", () => {
  it("should render title", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
