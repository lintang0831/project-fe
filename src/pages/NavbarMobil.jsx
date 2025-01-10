import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Gunakan file CSS ini

const NavbarMobil = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleLogoutClick = () => {
    // SweetAlert konfirmasi dalam bahasa Indonesia
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan keluar dari aplikasi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Logika logout
        localStorage.removeItem("authToken"); // Hapus token dari localStorage
        localStorage.removeItem("adminData"); // Hapus data pengguna jika ada
        navigate("/login"); // Redirect ke halaman login setelah logout
      }
    });
  };

  return (
    <header className="fixed w-full z-10 bg-secondary text-white py-4 shadow-md">
      {/* Bagian Navigasi Desktop */}
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          {/* Logo dengan Ikon */}
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            WheelsDeal
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-lg">
          {/* Link Navigasi */}
          <Link
            to="/dashboard"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Dashboard
          </Link>
          <Link
            to="/datamobil"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Mobil
          </Link>

          <button
            onClick={handleLogoutClick} // Attach the onClick handler
            className="hidden lg:flex border-2 border-primary text-lg px-5 py-2 rounded-md hover:bg-primary hover:text-white transition duration-200 ease-linear"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* Bagian Navigasi Responsif */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-medium text-xl text-center pt-8 pb-4 gap-6 w-3/4 h-fit rounded-br-xl shadow-lg transition-transform duration-300`}
      >
        <Link
          to="/dashboard"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          Dashboard
        </Link>
        <Link
          to="/datamobil"
          className="hover:text-primary transition duration-200 ease-linear"
          onClick={handleChange}
        >
          Mobil
        </Link>
        <div>
          <button
            onClick={handleLogoutClick} // Gunakan fungsi logout yang sama
            className="border-2 border-primary py-2 px-5 rounded-md text-center inline-block hover:bg-primary hover:text-white transition duration-200 ease-linear"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarMobil;
