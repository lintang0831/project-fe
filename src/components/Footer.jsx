import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h1 className="font-semibold text-2xl pb-4">WheelsDeal</h1>
          <p className="text-sm">
            Kami menyediakan berbagai pilihan mobil terbaik untuk Anda. Nikmati
            pengalaman membeli mobil dengan mudah dan aman. Temukan mobil impian
            Anda sekarang!
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Tautan Halaman
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Tentang Kami
            </Link>
            <Link
              to="/cars"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Mobil Kami
            </Link>
            <Link
              to="/services"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Layanan
            </Link>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Mobil Bekas Dijual
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pelajari Lebih Lanjut
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Ramah Pengguna
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Pencarian dan Filter
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Pembayaran Aman
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear hover:text-primary"
            >
              Layanan Geolokasi
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-4 text-sm">
          &copy; Dikembangkan oleh{" "}
          <span className="text-primary font-semibold mx-2">
            ntang programmers
          </span>
          Semua hak cipta dilindungi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
