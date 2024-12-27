import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavbarMobil from "./pages/NavbarMobil";
import Dashboard from "./pages/Dashboard";
import DataMobil from "./pages/DataMobil";
import TambahMobil from "./pages/TambahMobil";
import EditMobil from "./pages/EditMobil";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbarmobil" element={<NavbarMobil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datamobil" element={<DataMobil />} />
          <Route path="/tambahmobil" element={<TambahMobil />} />
          <Route path="/editmobil" element={<EditMobil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
