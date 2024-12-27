import React, { useState } from "react";
import { GiCarWheel } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";

const OurServices = () => {
  // Dummy data for the services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Layanan Roda",
      icon: <GiCarWheel />,
      description:
        "Kami menyediakan layanan roda premium dengan perawatan dan perbaikan berkualitas tinggi.",
    },
    {
      id: 2,
      title: "Desain Kustom",
      icon: <MdDesignServices />,
      description:
        "Layanan desain khusus untuk memberikan sentuhan unik dan personal pada kendaraan Anda.",
    },
    {
      id: 3,
      title: "Pengaturan Kendaraan",
      icon: <IoSettings />,
      description:
        "Penyesuaian profesional pengaturan kendaraan untuk kinerja optimal.",
    },
    {
      id: 4,
      title: "Penjualan Mobil",
      icon: <FaCar />,
      description:
        "Jelajahi berbagai mobil baru dan bekas yang tersedia untuk pembelian.",
    },
    {
      id: 5,
      title: "Perawatan Mesin",
      icon: <SiCoronaengine />,
      description:
        "Layanan perawatan mesin menyeluruh untuk memastikan mobil Anda berjalan lancar.",
    },
    {
      id: 6,
      title: "Jadwal Pemeliharaan",
      icon: <SiCoronaengine />,
      description:
        "Jadwalkan pemeliharaan rutin untuk kendaraan Anda guna memastikan umur panjangnya.",
    }, // New service
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          Layanan <span style={styles.highlight}>Kami</span>
        </h1>
      </div>

      <div style={styles.servicesContainer}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.serviceTitle}>{service.title}</h2>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f4f4f4",
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "100vh", // Ensures the container takes up full height
  },
  header: {
    textAlign: "center",
    marginBottom: "50px", // Increased margin-bottom for more space
    paddingTop: "80px", // Increased padding-top to push content further down
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
  },
  highlight: {
    color: "#00796b", // Teal color for highlight
  },
  servicesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    justifyItems: "center",
    paddingTop: "40px", // More padding at the top of the grid
  },
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    width: "100%",
  },
  icon: {
    fontSize: "50px",
    color: "#00796b", // Teal color for icons
    marginBottom: "20px",
  },
  serviceTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.5",
  },
};

export default OurServices;
