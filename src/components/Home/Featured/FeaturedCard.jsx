import React from "react";

const FeaturedCard = ({ id, img, name, price }) => {
  return (
    <div
      className="relative border-2 border-secondary bg-gray-100 text-black rounded-xl mb-4 cursor-pointer hover:scale-95 hover:bg-gray-200 transition duration-200 ease-linear shadow-lg"
      key={id}
    >
      {/* Bagian Gambar */}
      <img src={img} alt={name} className="rounded-t-xl w-full" />

      {/* Overlay Teks */}
      <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black/70 to-transparent rounded-xl p-4">
        <h1 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          {name}
        </h1>
        <h2 className="font-medium text-lg text-yellow-300">
          Mulai dari Rp{price.toLocaleString("id-ID")}
        </h2>
      </div>
    </div>
  );
};

export default FeaturedCard;
