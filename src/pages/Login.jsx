import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already logged in and redirect to dashboard if so
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        { email, password }
      );

      const { token, data } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("adminData", JSON.stringify(data));

        Swal.fire({
          icon: "success",
          title: "Berhasil Masuk!",
          text: response.data.message,
          confirmButtonText: "Lanjutkan",
        }).then(() => {
          navigate("/dashboard"); // Navigate to dashboard after login
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Gagal!",
          text: "Token tidak ditemukan. Silakan coba lagi.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Login</h1>
            <p className="mt-2 text-sm text-gray-400">
              Masukkan email dan kata sandi untuk masuk
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary py-2 px-4 rounded-md text-lg font-medium text-white"
              >
                {loading ? "Loading..." : "Masuk"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
