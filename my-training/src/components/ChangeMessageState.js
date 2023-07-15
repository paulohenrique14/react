import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const chat = "Olá";
  return (
    <div>
      <h1>message alterator</h1>
      <button onClick={() => handleMessage(chat)}>2</button>
    </div>
  );
};

export default ChangeMessageState;
