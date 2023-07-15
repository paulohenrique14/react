import React from "react";

const UserDetails = () => {
  const users = [
    { name: "José", age: 18, job: "Developer", id: 1 },
    { name: "Hiago", age: 13, job: "Student", id: 2 },
    { name: "Guilherme", age: 23, job: "Lawyer", id: 3 },
    { name: "Isabele", age: 18, job: "Singer", id: 4 },
  ];

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <ul>
          <h2>Aluno nº{user.id}</h2>
          <li>Name: {user.name}</li>
          <li>Job: {user.job}</li>
          <li>Age: {user.age}</li>
          <p>Can this person have a Mrs. Puff driver class?</p>
          {user.age >= 18 ? (
            <p style={{ color: "reen" }}>
              Yes, you can have a Mrs. Puff class driver
            </p>
          ) : (
            <p style={{ color: "red" }}>
              No, you can't have a Mrs. Puff driver class.
            </p>
          )}
          <br /> <br /> <br />
        </ul>
      ))}
    </div>
  );
};

export default UserDetails;
