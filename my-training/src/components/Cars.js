import React from "react";

const Cars = ({ brand, model, color, newCar }) => {
  return (
    <div>
      <h2>{brand} details:</h2>
      <ul>
        <li>{model}</li>
        <li>{color}</li>
        {newCar && (
          <li>
            <b>that's a brand new car</b>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Cars;
