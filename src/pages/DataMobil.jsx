import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarMobil from "./NavbarMobil";
import { API_Mobil } from "../utils/BaseUrl";

const DataMobil = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get admin data from localStorage
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  const idAdmin = adminData ? adminData.id : null; // Access the admin's ID

  useEffect(() => {
    if (idAdmin) {
      axios
        .get(`${API_Mobil}/getAllByAdmin/${idAdmin}`)
        .then((response) => {
          console.log("Data Mobil:", response.data); // Debugging log
          setCars(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching cars:", err); // Debugging log
          setError("Gagal memuat data mobil.");
          setLoading(false);
        });
    } else {
      setError("ID Admin tidak ditemukan.");
      setLoading(false);
    }
  }, [idAdmin]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mobil yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_Mobil}/delete/${id}`)
          .then(() => {
            setCars(cars.filter((car) => car.id !== id));
            Swal.fire({
              icon: "success",
              title: "Berhasil!",
              text: "Mobil berhasil dihapus.",
              confirmButtonText: "OK",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Gagal!",
              text: "Terjadi kesalahan saat menghapus mobil. Silakan coba lagi.",
              confirmButtonText: "OK",
            });
            console.error("Error saat menghapus mobil:", err); // Debugging log
          });
      }
    });
  };

  return (
    <div className="bg-white text-gray-900 flex flex-col min-h-screen">
      <NavbarMobil />
      <main className="container mx-auto px-4 py-16 flex-grow mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Data Mobil</h2>
          <p className="text-gray-600 mt-2">
            Kelola daftar mobil Anda dengan mudah.
          </p>
        </div>
        <a
          href="/tambahmobil"
          className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-8 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-800 transition ease-in-out duration-300 mb-6"
        >
          + Tambah Mobil
        </a>

        {loading ? (
          <div className="text-center text-xl text-gray-600">Memuat...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">{error}</div>
        ) : (
          <div className="overflow-x-auto bg-gray-100 shadow-md rounded-lg">
            <table className="min-w-full border-collapse text-gray-800">
              <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">No</th>
                  <th className="px-6 py-3 text-left">Nama Mobil</th>
                  <th className="px-6 py-3 text-left">Harga Mobil</th>
                  <th className="px-6 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cars.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-gray-600"
                    >
                      <p className="text-xl">Belum ada data mobil.</p>
                      <img
                        src="/images/empty-data.svg"
                        alt="No data"
                        className="mx-auto w-64 mt-4"
                      />
                    </td>
                  </tr>
                ) : (
                  cars.map((car, index) => (
                    <tr
                      key={car.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                      } border-b border-gray-200 hover:bg-gray-200 transition`}
                    >
                      <td className="px-6 py-4 text-center">{index + 1}</td>
                      <td className="px-6 py-4">{car.namaMobil}</td>
                      <td className="px-6 py-4">Rp {car.hargaMobil}</td>
                      <td className="px-6 py-4 text-center space-x-4">
                        <a
                          href={`/editmobil/${car.id}`}
                          className="inline-flex items-center bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                        >
                          Ubah
                        </a>
                        <button
                          onClick={() => handleDelete(car.id)}
                          className="inline-flex items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
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
