import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-gray-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer shadow-md">
      <p>{icon}</p>
      <h1 className="text-primary text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-700">
        Kami berkomitmen untuk memberikan pelayanan terbaik, dengan solusi yang
        cepat, mudah, dan terpercaya. Temukan berbagai keuntungan hanya bersama
        kami.
      </p>
    </div>
  );
};

export default WhyUsCard;
