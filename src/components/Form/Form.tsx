import { useForm } from "react-hook-form";

import "./Form.css";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const exterior = watch("estadoCivil");

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <h1>Login</h1>

        <div className="textbox">
          <input
            name="nome"
            ref={register({ required: true })}
            placeholder="nome"
            title="name"
            data-testid="name"
          />
          {errors.nome && <p>Digite seu nome</p>}
        </div>

        <div className="textbox">
          <input
            name="cidade"
            ref={register}
            placeholder="cidade"
            title="cidade"
            data-testid="cidade"
          />
          {errors.cidade && <p>Digite a cidade</p>}
        </div>

        <div className="textbox">
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="e-mail"
            data-testid="mail"
          />
          {errors.email && <p>Digite seu e-mail</p>}
        </div>

        <div className="textbox">
          <input
            name="idade"
            type="number"
            ref={register({ min: 18, max: 99, required: true })}
            placeholder="idade"
            data-testid="idade"
          />
          {errors.idade && <p>Digite sua idade</p>}
        </div>

        <div>
          <input
            type="checkbox"
            ref={register({ required: true })}
            name="estadoCivil"
            value="masculino"
          />{" "}
          Estado Civil
        </div>
        {exterior && (
          <div className="textbox">
            <input
              type="text"
              name="conjugue"
              ref={register({ required: true })}
              placeholder="Cônjuge"
            />
          </div>
        )}
        <br />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;
