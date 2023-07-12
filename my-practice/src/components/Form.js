import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Seu nome de usuário é ${name}`);
    console.log(`Sua senha é ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input
            type="text"
            placeholder="Digite o seu nome"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite a sua senha"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
