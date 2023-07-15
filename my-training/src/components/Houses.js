import React from "react";

const Houses = ({ bedroom, bathroom, garden, id, img }) => {
  return (
    <div>
      <h1>House id nº{id}</h1>
      <ul>
        <li>How many bedrooms: {bedroom}</li>
        <li>How many bathrooms: {bathroom}</li>
        <p>
          Has a garden? {garden}
          {garden ? <li>yes</li> : <li>No</li>}
        </p>
        <li>
          <img src={img} alt="" />
        </li>
      </ul>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Houses;
