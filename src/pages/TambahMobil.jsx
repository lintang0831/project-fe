import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const uploadImageToS3 = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://s3.lynk2.co/api/s3/test",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    const fotoUrl = response.data?.data?.url_file;
    if (fotoUrl) {
      console.log("Respons S3:", response.data);
      return fotoUrl;
    } else {
      console.error("Respons tidak valid:", response);
      return null;
    }
  } catch (error) {
    console.error("Upload ke S3 gagal:", error);
    return null;
  }
};

const TambahMobil = () => {
  const [newCar, setNewCar] = useState({ namaMobil: "", hargaMobil: "" });
  const [foto, setFoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem("adminData");
    if (adminData) {
      const parsedAdminData = JSON.parse(adminData);
      setIdAdmin(parsedAdminData?.id || "");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCar.namaMobil || !newCar.hargaMobil || !foto) {
      Swal.fire({
        icon: "error",
        title: "Form tidak lengkap",
        text: "Harap lengkapi semua kolom dan unggah foto!",
      });
      return;
    }

    setLoading(true);

    try {
      const fotoUrl = await uploadImageToS3(foto);
      if (!fotoUrl) {
        Swal.fire({
          icon: "error",
          title: "Upload Gagal",
          text: "Tidak dapat mengunggah foto ke S3.",
        });
        setLoading(false);
        return;
      }

      const carWithFoto = { ...newCar, fotoUrl };

      console.log("Data yang dikirim ke backend:", carWithFoto);

      const response = await axios.post(
        `http://localhost:8080/api/admin/mobil/tambah/${idAdmin}`,
        carWithFoto
      );

      console.log("Respons dari server:", response.data);

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Mobil berhasil ditambahkan.",
      }).then(() => navigate("/datamobil"));

      setNewCar({ namaMobil: "", hargaMobil: "" });
      setFoto(null);
    } catch (error) {
      console.error("Error dari server:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan Mobil",
        text: error.response?.data?.error || "Terjadi kesalahan.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-md max-w-md mx-auto mt-12">
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 text-center mb-6">
        Tambah Mobil Baru
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="namaMobil"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
          >
            Nama Mobil
          </label>
          <input
            type="text"
            id="namaMobil"
            name="namaMobil"
            value={newCar.namaMobil}
            onChange={handleInputChange}
            placeholder="Masukkan nama mobil"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
          />
        </div>

        <div>
          <label
            htmlFor="hargaMobil"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
          >
            Harga Mobil
          </label>
          <input
            type="number"
            id="hargaMobil"
            name="hargaMobil"
            value={newCar.hargaMobil}
            onChange={handleInputChange}
            placeholder="Masukkan harga mobil"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
          />
        </div>

        <div>
          <label
            htmlFor="fotoMobil"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
          >
            Foto Mobil
          </label>
          {foto && (
            <img
              src={URL.createObjectURL(foto)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
          )}
          <input
            type="file"
            id="fotoMobil"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-700 dark:bg-gray-600 text-white py-2 px-6 rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-500 focus:ring-2 focus:ring-gray-500 transition duration-300"
          >
            {loading ? "Loading..." : "Tambah Mobil"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahMobil;
