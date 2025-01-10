import React from "react";
import NavbarMobil from "./NavbarMobil"; // Import NavbarMobil component
import { Bar } from "react-chartjs-2"; // Import Chart.js component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Jumlah Kendaraan",
        data: [15, 20, 35, 40, 30, 50],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Statistik Kendaraan",
      },
    },
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar Section */}
      <NavbarMobil />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 flex-grow mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 transition-all">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4">Produk Mobil</h2>
            <p className="text-gray-600 text-sm mb-6">
              Lihat data kendaraan terbaru yang tersedia.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:opacity-80 transition-all">
              Lihat Detail
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4">Data Mobil</h2>
            <p className="text-gray-600 text-sm mb-6">
              Kelola data data mobil dan interaksi dengan sistem.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:opacity-80 transition-all">
              Lihat Detail
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4">Transaksi Terbaru</h2>
            <p className="text-gray-600 text-sm mb-6">
              Pantau transaksi terbaru yang terjadi di sistem.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:opacity-80 transition-all">
              Lihat Detail
            </button>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Laporan dan Grafik</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <p className="text-gray-600 text-sm mb-8">
              Visualisasi data dan laporan akan membantu Anda memahami lebih
              banyak tentang performa sistem.
            </p>
            <div className="mt-8">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
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

export default Dashboard;
