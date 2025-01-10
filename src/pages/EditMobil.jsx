import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate, useParams } from "react-router-dom";

const EditMobil = ({ onEditCar, onClose }) => {
  const [car, setCar] = useState({
    namaMobil: "",
    hargaMobil: "",
  });
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState(null);
  const { id } = useParams(); // Get the car ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Get admin data from localStorage
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setIdAdmin(adminData.id); // Set the admin ID from the adminData object
    }

    // Fetch the car details by ID
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/admin/mobil/getById/${id}`
        );
        setCar({
          namaMobil: response.data.namaMobil,
          hargaMobil: response.data.hargaMobil,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Mobil tidak ditemukan.",
          confirmButtonText: "OK",
        });
        navigate("/datamobil");
      }
    };

    fetchCarDetails();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleEditCar = async () => {
    if (!car.namaMobil || !car.hargaMobil) {
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

    console.log("Submitting data:", {
      idAdmin,
      namaMobil: car.namaMobil,
      hargaMobil: car.hargaMobil,
    });

    try {
      // Send the data directly, not wrapped in `mobilDTO`
      const response = await axios.put(
        `http://localhost:8080/api/admin/mobil/editById/${id}?idAdmin=${idAdmin}`,
        {
          namaMobil: car.namaMobil,
          hargaMobil: parseFloat(car.hargaMobil), // Ensure the price is a number
        }
      );

      console.log("Response after edit:", response.data);

      // Assuming the response contains the updated car object
      const updatedCar = response.data;

      // Update state with the new data
      setCar({
        namaMobil: updatedCar.namaMobil,
        hargaMobil: updatedCar.hargaMobil.toString(), // Convert price to string for input
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Mobil!",
        text: "Mobil berhasil diperbarui.",
        confirmButtonText: "OK",
      }).then(() => {
        // Pass the updated car data to the parent component
        onEditCar?.(updatedCar);
        onClose?.();
        navigate("/datamobil");
      });
    } catch (error) {
      console.log("Error during update:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Mengedit Mobil!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full sm:w-96 max-w-2xl">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Edit Mobil
        </h3>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Nama Mobil
            </label>
            <input
              type="text"
              name="namaMobil"
              value={car.namaMobil}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan nama mobil"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Harga Mobil
            </label>
            <input
              type="number"
              name="hargaMobil"
              value={car.hargaMobil}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan harga mobil"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleEditCar}
            disabled={loading}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:opacity-80"
          >
            {loading ? "Loading..." : "Edit Mobil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMobil;
