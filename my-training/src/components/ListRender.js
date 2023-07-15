import React, { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { name: "paulo", job: "fullstack developer", id: 1 },
    { name: "josé", job: "front-end developer", id: 2 },
    { name: "higor", job: "back-end developer", id: 3 },
  ]);

  const deleteUsers = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomNumber !== users.id);
    });

    alert(randomNumber);
  };

  return (
    <div>
      <h1>List Render</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        <button onClick={deleteUsers}>Deletar aleatóriamente um user</button>
      </ul>
    </div>
  );
};

export default ListRender;
