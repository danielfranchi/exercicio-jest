import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<Alert />);
  const paragraphElement = screen.getByTestId("paragraph");

  expect(paragraphElement).toHaveTextContent("você deve aceitar os termos");
});
