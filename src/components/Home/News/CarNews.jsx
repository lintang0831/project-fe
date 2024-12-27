import React from "react";
import Slider from "react-slick"; // Pastikan Anda sudah menginstal react-slick
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "/src/assets/img/news1.jpg",
      desc: "Toyota mengungkap potensi mesin pembakaran internal, bahkan di era EV",
    },
    {
      id: 1,
      img: "/src/assets/img/news2.jpg",
      desc: "BMW Group India mencatat penjualan tahunan terbaik di 2023, memimpin segmen mobil listrik mewah",
    },
    {
      id: 2,
      img: "/src/assets/img/news3.jpg",
      desc: "MG Astor 2024 diluncurkan di India, harga mulai dari Rs 9,98 lakh",
    },
    {
      id: 3,
      img: "/src/assets/img/news4.jpg",
      desc: "Kia Sonet facelift diluncurkan di India dengan harga Rs 7,99 lakh, menjadi pesaing Tata Nexon & Maruti Suzuki Brezza",
    },
    {
      id: 4,
      img: "/src/assets/img/news5.jpg",
      desc: "Inventaris kendaraan baru mencapai level tertinggi dalam 3 tahun terakhir",
    },
    {
      id: 5,
      img: "/src/assets/img/news6.jpg",
      desc: "Penjualan JLR India naik 74% di Q3 berkat permintaan kuat untuk Range Rover, Range Rover Velar, Defender",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Perbaikan properti autoplay
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Berita & <span className="text-primary">Saran Mobil</span>
      </h1>

      <p className="text-center">
        Dapatkan informasi terkini dan saran terbaik seputar dunia otomotif.
        Dari peluncuran mobil terbaru hingga inovasi teknologi, kami hadir untuk
        Anda.
      </p>

      <div className="mt-8">
        <Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
