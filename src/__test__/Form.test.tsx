import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form/Form";
import userEvent from "@testing-library/user-event";

describe("testing form", () => {
  it("testing the name form", () => {
    render(<Form />);
    const inputName = screen.getByTestId("name");
    userEvent.type(inputName, "daniel");
    fireEvent.change(inputName);
  });

  it("testing the name form", () => {
    render(<Form />);
    const inputMail = screen.getByTestId("mail");
    userEvent.type(inputMail, "daniel@yahoo.com");
    fireEvent.change(inputMail);
  });
});
