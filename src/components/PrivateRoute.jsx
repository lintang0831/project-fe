import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth.jsx"; // Import the isAuthenticated function

// Komponen ini akan mengarahkan pengguna ke halaman login jika belum login
const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Jika token tidak ada, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  // Jika ada token, render halaman yang diminta
  return children;
};

export default PrivateRoute;
