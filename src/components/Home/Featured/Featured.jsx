import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/car1.jpg",
      name: "Cadillac Escalade",
      price: 22440,
    },
    {
      id: 1,
      img: "/src/assets/img/car2.jpg",
      name: "BMW 3 Series",
      price: 34666,
    },

    {
      id: 2,
      img: "/src/assets/img/car1.jpg",
      name: "Xenia 3 Series",
      price: 22220,
    },
    {
      id: 3,
      img: "/src/assets/img/car2.jpg",
      name: "Pajero Sport",
      price: 55440,
    },
    {
      id: 4,
      img: "/src/assets/img/car1.jpg",
      name: "Rubicon Sport",
      price: 65340,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-14">
      <h1 className="font-bold text-4xl text-center mb-4">
        Mobil <span className="text-primary">Unggulan</span>
      </h1>

      <p className="text-center text-lg text-gray-600 mb-8">
        Temukan pilihan mobil terbaik yang siap menemani perjalanan Anda. Kami
        menawarkan berbagai mobil unggulan dengan harga terjangkau dan kualitas
        terbaik.
      </p>

      <div>
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeaturedCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price.toLocaleString("id-ID")}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
