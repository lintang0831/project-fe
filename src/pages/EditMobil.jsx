import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditMobil = ({ onEditCar, onClose }) => {
  const [car, setCar] = useState({
    namaMobil: "",
    hargaMobil: "",
    fotoUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [idAdmin, setIdAdmin] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setIdAdmin(adminData.id);
    }

    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/admin/mobil/getById/${id}`
        );
        setCar({
          namaMobil: response.data.namaMobil,
          hargaMobil: response.data.hargaMobil,
          fotoUrl: response.data.fotoUrl,
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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

    const formData = new FormData();
    formData.append(
      "mobil",
      JSON.stringify({ namaMobil: car.namaMobil, hargaMobil: car.hargaMobil })
    ); // Add the car details as JSON
    if (image) {
      formData.append("file", image);
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/admin/mobil/editById/${id}?idAdmin=${idAdmin}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedCar = response.data;

      setCar({
        namaMobil: updatedCar.namaMobil,
        hargaMobil: updatedCar.hargaMobil.toString(),
        fotoUrl: updatedCar.fotoUrl,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Mobil!",
        text: "Mobil berhasil diperbarui.",
        confirmButtonText: "OK",
      }).then(() => {
        onEditCar?.(updatedCar);
        onClose?.();
        navigate("/datamobil");
      });
    } catch (error) {
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
        <div>
          <label htmlFor="namaMobil" className="text-gray-600">
            Nama Mobil
          </label>
          <input
            type="text"
            id="namaMobil"
            name="namaMobil"
            className="w-full border-gray-400 p-2 mb-4 mt-2 rounded-md shadow-sm"
            value={car.namaMobil}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hargaMobil" className="text-gray-600">
            Harga Mobil
          </label>
          <input
            type="number"
            id="hargaMobil"
            name="hargaMobil"
            className="w-full border-gray-400 p-2 mb-4 mt-2 rounded-md shadow-sm"
            value={car.hargaMobil}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="foto" className="text-gray-600">
            Foto Mobil
          </label>
          <input
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            className="w-full border-gray-400 p-2 mb-4 mt-2 rounded-md shadow-sm"
            onChange={handleImageChange}
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleEditCar}
            disabled={loading}
            className={`${
              loading ? "bg-gray-300" : "bg-blue-500"
            } text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none`}
          >
            {loading ? "Memproses..." : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMobil;
