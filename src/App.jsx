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
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute yang bisa diakses tanpa login */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbarmobil" element={<NavbarMobil />} />

        {/* Rute yang hanya bisa diakses jika sudah login */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/datamobil"
          element={
            <PrivateRoute>
              <DataMobil />
            </PrivateRoute>
          }
        />
        <Route
          path="/tambahmobil"
          element={
            <PrivateRoute>
              <TambahMobil />
            </PrivateRoute>
          }
        />
        <Route
          path="/editmobil/:id"
          element={
            <PrivateRoute>
              <EditMobil />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
