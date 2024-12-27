import React from "react";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-screen container mx-auto flex flex-col justify-center md:flex-row items-center px-4">
        {/* Bagian Konten */}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Temukan Kendaraan
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Impianmu Hari Ini
            </h1>
          </div>

          <p className="text-lg lg:text-2xl font-medium">
            Lebih dari 1000+ Mobil Baru Tersedia di Sini
          </p>
          <p className="text-sm lg:text-base">
            Temukan mobil impianmu dengan mudah! Kami menyediakan berbagai
            pilihan kendaraan berkualitas yang siap untuk menemani perjalananmu.
          </p>

          <div className="flex gap-8">
            <button className="bg-primary py-2 px-6 rounded-md text-lg font-medium hover:scale-95 transition duration-150 ease-linear">
              Jelajahi Lebih Lanjut
            </button>
            <button className="border-2 border-primary py-2 px-6 rounded-md text-lg font-medium hover:bg-primary hover:text-white transition duration-200 ease-linear">
              Lihat Mobil
            </button>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="w-full md:w-2/4 mt-4">
          <img src={img} alt="Hero Section" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
