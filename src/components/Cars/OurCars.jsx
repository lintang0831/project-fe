import React from "react";
import CarsCard from "./CarsCard";
import mobil1 from "/src/assets/img/mobil1.jpg";
import car2 from "/src/assets/img/car2.jpg";
import car1 from "/src/assets/img/car1.jpg";

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: mobil1,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: car2,
      name: "BMW 3 Series",
      price: "34,666",
    },
    {
      id: 2,
      img: car1,
      name: "Xenia 3 Series",
      price: "22,220",
    },
    {
      id: 3,
      img: car2,
      name: "Pajero Sport",
      price: "55,440",
    },
    {
      id: 4,
      img: car1,
      name: "Rubicon Sport",
      price: "65,340",
    },
    {
      id: 5,
      img: car2,
      name: "Avanza Sport",
      price: "77,340",
    },
    {
      id: 6,
      img: mobil1,
      name: "Xenia Sport",
      price: "22,340",
    },
    {
      id: 7,
      img: car1,
      name: "Sedan Sport",
      price: "65,340",
    },
    {
      id: 8,
      img: mobil1,
      name: "Ayla Balap",
      price: "75,340",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          Mobil <span style={styles.highlight}>Kami</span>
        </h1>
      </div>
      <div style={styles.grid}>
        {carsData.map((item) => (
          <CarsCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh", // Ensures the container takes up full height
  },
  header: {
    textAlign: "center",
    marginBottom: "50px", // Increased margin-bottom for more space after the title
    paddingTop: "60px", // Increased padding-top to move content further down
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  highlight: {
    color: "#00796b", // Teal color to match the theme
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    paddingTop: "30px", // More padding at the top of the grid
  },
};

export default OurCars;
