import React from "react";

const CarsCard = ({ img, name, price }) => {
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.description}>
        Rasakan sensasi berkendara dengan {name}. Dirancang untuk kenyamanan dan
        performa, mobil ini memastikan perjalanan yang tak terlupakan.
      </p>
      <div style={styles.footer}>
        <h3 style={styles.price}>Rp {price}</h3>
        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  name: {
    fontSize: "1.5rem",
    color: "#333",
    margin: "15px 0",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#00796b", // A professional teal/green for the price
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#00796b", // Teal color for the button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease", // Smooth transition for background-color, transform, etc.
    fontSize: "1rem", // Ensure text size is uniform
  },
  buttonHover: {
    backgroundColor: "#004d40", // Darker teal for hover effect
    transform: "scale(1.05)", // Slight scale-up effect on hover
  },
};

export default CarsCard;
