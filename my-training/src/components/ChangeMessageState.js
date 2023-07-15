import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const chats = ["olá", "hello", "hallo"];
  return (
    <div>
      <h1>message alterator</h1>
      <button onClick={() => handleMessage(chats[0])}>Português</button>
      <button onClick={() => handleMessage(chats[1])}>Inglês</button>
      <button onClick={() => handleMessage(chats[2])}>Alemão</button>
    </div>
  );
};

export default ChangeMessageState;
