import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

const TambahMobil = () => {
  const [newCar, setNewCar] = useState({
    namaMobil: "",
    hargaMobil: "",
    fotoUrl: "", // Tambahkan fotoUrl ke state
  });
  const [foto, setFoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setIdAdmin(adminData.id);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleAddCar = async () => {
    if (!newCar.namaMobil || !newCar.hargaMobil || !foto) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap lengkapi semua kolom dan unggah foto!",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("mobil", JSON.stringify(newCar)); // Add the car data as a JSON string
      formData.append("file", foto); // Add the selected photo

      // Log to check if formData is set correctly
      console.log("FormData:", formData);

      const response = await axios.post(
        `http://localhost:8080/api/admin/mobil/tambah/${idAdmin}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Mobil berhasil ditambahkan.",
        confirmButtonText: "OK",
      }).then(() => navigate("/datamobil"));
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan Mobil!",
        text: error.response?.data?.error || "Terjadi kesalahan.",
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
              className="w-full px-5 py-3 border border-gray-300 rounded-lg"
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
              className="w-full px-5 py-3 border border-gray-300 rounded-lg"
              placeholder="Masukkan harga mobil"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Foto Mobil
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddCar}
            disabled={loading}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:opacity-80"
          >
            {loading ? "Loading..." : "Tambah Mobil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahMobil;
