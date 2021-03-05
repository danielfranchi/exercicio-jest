import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form/Form";
import userEvent from "@testing-library/user-event";

describe("testing form", () => {
  it("testing the name form", async () => {
    render(<Form />);
    const form = screen.getByTitle(/form/i);
    expect(form).toBeTruthy();

    const name = screen.getByRole("textbox", {
      name: /name/i,
    });
    expect(name).toBeTruthy();
    userEvent.type(name, "daniel");
    fireEvent.submit(form);

    const cidade = screen.getByRole("textbox", {
      name: /cidade/i,
    });
    expect(cidade).toBeTruthy();
    userEvent.type(cidade, "campinas");
    fireEvent.submit(form);

    const mail = screen.getByRole("textbox", {
      name: /mail/i,
    });
    expect(mail).toBeTruthy();
    userEvent.type(mail, "daniel@live.com");
    fireEvent.submit(form);

    const idade = screen.getByRole("spinbutton", {
      name: /idade/i,
    });
    expect(idade).toBeTruthy();
    const age = "20";
    userEvent.type(idade, age);
    fireEvent.submit(form);

    const checkbox = screen.getByRole("checkbox", {
      name: /estadocivil/i,
    });
    expect(checkbox).toBeTruthy();
    fireEvent.submit(form);

    const btn = await screen.findByRole("button", {
      name: /enviar/i,
    });
    expect(btn).toBeTruthy();
  });
});
