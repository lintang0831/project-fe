import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Import SweetAlert2 CSS

const TambahMobil = ({ onAddCar, onClose }) => {
  const [newCar, setNewCar] = useState({
    merkMobil: "",
    platNomor: "",
    tahunMobil: "",
    modelMobil: "",
    warnaMobil: "",
  });
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState(null); // State for storing admin id

  useEffect(() => {
    // Retrieve the idAdmin from localStorage after the component mounts
    const storedAdminId = localStorage.getItem("userId");
    if (storedAdminId) {
      setIdAdmin(storedAdminId); // Set the admin ID from localStorage
    }
  }, []);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  // Handler for adding a new car
  const handleAddCar = async () => {
    if (
      !newCar.merkMobil ||
      !newCar.platNomor ||
      !newCar.tahunMobil ||
      !newCar.modelMobil ||
      !newCar.warnaMobil
    ) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap lengkapi semua kolom!",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!idAdmin) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "ID Admin tidak ditemukan. Harap login terlebih dahulu.",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);

    try {
      // Send data to backend via POST request using the dynamic idAdmin
      const response = await axios.post(
        `http://localhost:8080/api/mobil/tambah/${idAdmin}`, // Include the admin id here
        newCar
      );

      // Show success message with SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Mobil!",
        text: "Mobil berhasil ditambahkan.",
        confirmButtonText: "OK",
      }).then(() => {
        // Add the new car to the list and close the modal
        onAddCar({ ...newCar, id: response.data.id });
        onClose();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan Mobil!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full sm:w-96 max-w-2xl transition-transform transform scale-105 hover:scale-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Tambah Mobil
        </h3>

        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {[
            {
              label: "Merk Mobil",
              name: "merkMobil",
              placeholder: "Masukkan merk mobil",
            },
            {
              label: "Plat Nomor",
              name: "platNomor",
              placeholder: "Masukkan plat nomor",
            },
            {
              label: "Tahun Mobil",
              name: "tahunMobil",
              placeholder: "Masukkan tahun mobil",
            },
            {
              label: "Model Mobil",
              name: "modelMobil",
              placeholder: "Masukkan model mobil",
            },
            {
              label: "Warna Mobil",
              name: "warnaMobil",
              placeholder: "Masukkan warna mobil",
            },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={newCar[field.name]}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddCar}
            disabled={loading}
            className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg shadow-md hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
          >
            {loading ? "Loading..." : "Tambah Mobil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahMobil;
