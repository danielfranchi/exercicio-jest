import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form/Form";
import userEvent from "@testing-library/user-event";

describe("testing form", () => {
  it("testing the name form", async () => {
    render(<Form />);
    const form = screen.getByTitle(/form/i)
    expect(form).toBeTruthy()

    const name = screen.getByRole('textbox', {
      name: /name/i
    })
    expect(name).toBeTruthy()
    userEvent.type(name, "daniel")

    const cidade = screen.getByRole('textbox', {
      name: /cidade/i
    })
    expect(cidade).toBeTruthy()
    userEvent.type(cidade, "campinas")

    const mail = screen.getByRole('textbox', {
      name: /mail/i
    })
    expect(mail).toBeTruthy()
    userEvent.type(mail, "daniel@live.com")

    const idade = screen.getByRole('spinbutton', {
      name: /idade/i
    })
    expect(idade).toBeTruthy()
    const age = '20'
    userEvent.type(idade, age)

    const checkbox = screen.getByRole('checkbox', {
      name: /estadocivil/i
    })
    expect(checkbox).toBeTruthy()

    const btn = screen.getByRole('button', {
      name: /enviar/i
    })
    expect(btn).toBeTruthy()

  });
});
