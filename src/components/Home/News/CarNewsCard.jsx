import React from "react";

const CarNewsCard = ({ img, desc }) => {
  return (
    <div className="border-2 border-secondary rounded-md cursor-pointer">
      <img
        src={img || "placeholder-image.jpg"}
        alt="berita"
        className="w-full h-auto"
      />
      <h3 className="font-semibold text-lg p-2">
        {desc || "Deskripsi tidak tersedia"}
      </h3>
    </div>
  );
};

export default CarNewsCard;
