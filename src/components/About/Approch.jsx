import React from "react";
import img from "../../assets/img/approch.jpg";

const Approch = () => {
  return (
    <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section */}
      <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Pendekatan Kami
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600 leading-relaxed">
          Memberdayakan individu untuk mencapai solusi mobilitas berkelanjutan
          dan menginspirasi dampak positif terhadap lingkungan.
        </h2>
        <p className="text-gray-500 leading-relaxed text-justify">
          Kami berkomitmen untuk menciptakan perubahan positif melalui solusi
          mobilitas yang ramah lingkungan. Temukan bagaimana solusi kami dapat
          terintegrasi dalam kehidupan sehari-hari Anda untuk memberikan dampak
          yang berarti.
        </p>
        <p className="text-gray-500 leading-relaxed text-justify">
          Bergabunglah dengan kami dalam misi untuk menciptakan masa depan yang
          lebih berkelanjutan. Kami percaya bahwa setiap langkah kecil dapat
          memberikan perubahan besar untuk dunia.
        </p>
      </div>

      {/* image section */}
      <div className="w-full md:w-2/5">
        <img src={img} alt="Pendekatan Kami" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Approch;
