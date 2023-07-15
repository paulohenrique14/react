import React from "react";

const FunctionReceiver = ({ myFunction }) => {
  return (
    <div>
      <p>Function received from a prop</p>
      <button onClick={myFunction}>active function</button>
    </div>
  );
};

export default FunctionReceiver;
