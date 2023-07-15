import { useState } from "react";

const ScreenShow = () => {
  const [input, setInput] = useState();
  const [user, setUser] = useState();

  const handleClient = (e) => {
    e.preventDefault();
    setUser(input);
  };

  return (
    <div>
      <h1>UseState</h1>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClient}>Enviar</button>
      </form>
      <p>{user}</p>
    </div>
  );
};

export default ScreenShow;
