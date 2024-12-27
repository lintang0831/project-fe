import React from "react";
import img from "../../../assets/img/mission.jpg";

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Misi <span className="text-primary">Kami</span>
        </h1>
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        {/* Bagian Gambar */}
        <div className="w-full md:w-2/4">
          <img src={img} alt="Misi Kami" className="rounded-lg" />
        </div>

        {/* Bagian Konten */}
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className="font-bold text-primary text-lg lg:text-3xl">
            Menciptakan komunitas di mana setiap perjalanan menjadi luar biasa
          </h1>
          <h2 className="font-semibold text-lg lg:text-2xl">
            Memberdayakan individu untuk mencapai solusi mobilitas yang
            berkelanjutan dan menginspirasi dampak positif pada lingkungan.
          </h2>
          <p className="text-sm lg:text-base text-gray-700">
            Kami berkomitmen untuk memberikan pengalaman perjalanan yang tidak
            terlupakan, dengan fokus pada keberlanjutan dan inovasi di setiap
            langkah.
          </p>
          <p className="text-sm lg:text-base text-gray-700">
            Bergabunglah dengan kami untuk membangun masa depan yang lebih
            cerah, di mana mobilitas tidak hanya efisien tetapi juga ramah
            lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
