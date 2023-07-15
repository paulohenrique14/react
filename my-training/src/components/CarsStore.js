import Cars from "./Cars";

import React from "react";

const cars = [
  { brand: "Renault", model: "Sandero", color: "red", newCar: true },
  { brand: "Fiat", model: "Sandero", color: "blue", newCar: false },
  { brand: "Toyota", model: "Sandero", color: "grey", newCar: true },
];

const CarsStore = () => {
  return (
    <div>
      <h2>Car Store</h2>
      {cars.map((car) => (
        <Cars
          brand={car.brand}
          model={car.model}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
};

export default CarsStore;
