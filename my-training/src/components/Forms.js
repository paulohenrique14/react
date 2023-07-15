import React from "react";
import { useState } from "react";

const Forms = ({ user }) => {
  const [inputName, setInputName] = useState(user ? user.name : "");
  const [name, setName] = useState();

  const [inputAge, setInputAge] = useState(user ? user.age : "");
  const [age, setAge] = useState();

  const [inputDream, setInputDream] = useState(user ? user.dream : "");
  const [dream, setDream] = useState();

  const [inputSel, inputSetSel] = useState();
  const [sel, setSel] = useState();

  const handleDatas = (e) => {
    e.preventDefault();
    setName(inputName);
    setAge(inputAge);
    setDream(inputDream);
    setSel(inputSel);
  };

  const cleanName = () => {
    setName("");
    setInputName("");
    setAge("");
    setInputAge("");
    setDream("");
    setInputDream("");
  };

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleDatas}>
        <label htmlFor="name">Digite o seu nome</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
        <br />
        <label htmlFor="age">Digite sua idade</label>
        <br />
        <input
          type="number"
          id="age"
          name="age"
          onChange={(e) => setInputAge(e.target.value)}
          value={inputAge}
        />
        <br />
        <label htmlFor="dream">Qual o seu sonho?</label>
        <br />
        <textarea
          name="dream"
          id="dream"
          onChange={(e) => setInputDream(e.target.value)}
          value={inputDream}
        ></textarea>
        <select onChange={(e) => inputSetSel(e.target.value)}>
          <span>Vou realizar?</span>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
        <br />
        <button>Enviar respostas</button>
      </form>
      {name && (
        <>
          <p>Nome: {name}</p>
          <p>Idade: {age}</p>
          <p>Sonho: {dream}</p>
          <p>Vou realizar? {sel}</p>
          <button onClick={cleanName}>Limpar</button>
        </>
      )}
    </div>
  );
};

export default Forms;
