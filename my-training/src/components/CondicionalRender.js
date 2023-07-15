import { useState } from "react";

const CondicionalRender = () => {
  const [name, setName] = useState("João");

  const handleChangeName = () => {
    setName("José");
  };

  return (
    <div>
      <h1>renderização condicional</h1>
      {name === "João" ? (
        <div>
          <p>O nome é joão</p>
        </div>
      ) : (
        <div>
          <p>O nome nao é joão</p>
        </div>
      )}

      <button onClick={handleChangeName}>Troca nome</button>
    </div>
  );
};

export default CondicionalRender;
