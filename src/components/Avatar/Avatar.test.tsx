import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

test("img", () => {
  render(<Avatar />);
  const ImgElement = screen.getByAltText("img");

  expect(ImgElement).toHaveClass("img");
});
