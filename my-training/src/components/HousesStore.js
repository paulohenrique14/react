import React from "react";
import { useState } from "react";
import Houses from "./Houses";
import styles from "./HouseStore.module.css";
import House1 from "./imgs/1.jpg";
import House2 from "./imgs/2.jpg";
import House3 from "./imgs/3.jpg";
import House4 from "./imgs/4.jpg";

const HousesStore = () => {
  const [homes] = useState([
    { bedroom: 2, bathroom: 1, id: 1, garden: true, img: House1 },
    { bedroom: 3, bathroom: 2, id: 2, garden: true, img: House2 },
    { bedroom: 1, bathroom: 1, id: 3, garden: false, img: House3 },
    { bedroom: 5, bathroom: 3, id: 4, garden: true, img: House4 },
  ]);

  return (
    <div className={styles.container}>
      {homes.map((home) => (
        <Houses
          bedroom={home.bedroom}
          bathroom={home.bathroom}
          id={home.id}
          garden={home.garden}
          img={home.img}
        />
      ))}
    </div>
  );
};

export default HousesStore;
