import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarMobil from "./NavbarMobil"; // Import NavbarMobil component

const DataMobil = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all cars from the API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/mobil/all") // API endpoint to get all cars
      .then((response) => {
        setCars(response.data); // Update state with the fetched data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError("Failed to fetch data"); // Handle any errors during fetch
        setLoading(false);
      });
  }, []);

  // Handler for deleting a car
  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id)); // Remove car from list
    axios
      .delete(`/api/mobil/delete/${id}`) // Delete request to backend
      .then(() => {
        console.log("Car deleted successfully");
      })
      .catch((err) => {
        console.error("Failed to delete car", err);
      });
  };

  // Handler for editing a car (for simplicity, just log the car ID)
  const handleEdit = (id) => {
    console.log("Edit car with ID:", id);
    // Here, you can add a form or modal to edit car details
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <NavbarMobil />

      <main className="container mx-auto px-4 py-16 flex-grow mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Data Mobil
        </h2>

        {/* Add Button */}
        <a
          href="/tambahmobil"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition ease-in-out duration-300 mb-6"
        >
          Tambah Mobil
        </a>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">{error}</div>
        ) : (
          // Display cars in table format
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
            <table className="min-w-full table-auto text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">Merk Mobil</th>
                  <th className="px-6 py-3 text-left">Plat Nomor</th>
                  <th className="px-6 py-3 text-left">Tahun Mobil</th>
                  <th className="px-6 py-3 text-left">Model Mobil</th>
                  <th className="px-6 py-3 text-left">Warna Mobil</th>
                  <th className="px-6 py-3 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cars.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No cars available.
                    </td>
                  </tr>
                ) : (
                  cars.map((car) => (
                    <tr key={car.id} className="border-t hover:bg-gray-100">
                      <td className="px-6 py-4">{car.merkMobil}</td>
                      <td className="px-6 py-4">{car.platNomor}</td>
                      <td className="px-6 py-4">{car.tahunMobil}</td>
                      <td className="px-6 py-4">{car.modelMobil}</td>
                      <td className="px-6 py-4">{car.warnaMobil}</td>
                      <td className="px-6 py-4 flex space-x-2">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEdit(car.id);
                          }}
                          className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(car.id);
                          }}
                          className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-600"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <footer className="bg-primary text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; 2024 WheelsDeal. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DataMobil;
