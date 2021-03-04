import React from "react";

const Alert = () => {
  const [test, setText] = React.useState("");

  const alerta = () => {
    setText("você deve aceitar os termos");
  };

  return (
    <div>
      {/* <button onClick={alerta}>Clique aqui</button> */}
      <br />
      <p data-testid="paragraph">você deve aceitar os termos</p>
    </div>
  );
};

export default Alert;
