import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

const TambahMobil = ({ onAddCar, onClose }) => {
  const [newCar, setNewCar] = useState({
    namaMobil: "",
    hargaMobil: "",
  });
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get admin data from localStorage
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setIdAdmin(adminData.id); // Set the admin ID from the adminData object
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleAddCar = async () => {
    if (!newCar.namaMobil || !newCar.hargaMobil) {
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
      const response = await axios.post(
        `http://localhost:8080/api/admin/mobil/tambah/${idAdmin}`,
        {
          namaMobil: newCar.namaMobil,
          hargaMobil: parseFloat(newCar.hargaMobil),
        }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Mobil!",
        text: "Mobil berhasil ditambahkan.",
        confirmButtonText: "OK",
      }).then(() => {
        onAddCar?.({ ...newCar, id: response.data.id });
        onClose?.();
        navigate("/datamobil");
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
      <div className="bg-white rounded-xl shadow-xl p-10 w-full sm:w-96 max-w-2xl">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Tambah Mobil
        </h3>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Nama Mobil
            </label>
            <input
              type="text"
              name="namaMobil"
              value={newCar.namaMobil}
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
              value={newCar.hargaMobil}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan harga mobil"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddCar}
            disabled={loading}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:opacity-80"
          >
            {loading ? "Loading..." : "Tambah Mobil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahMobil;
