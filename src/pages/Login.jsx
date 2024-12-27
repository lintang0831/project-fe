import React, { useState } from "react";
import axios from "axios"; // Import axios
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Import SweetAlert2 CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // For loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Change the URL to the backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        { email, password }
      );

      // Assuming a successful login, handle the response (e.g., store JWT)
      const { token, data } = response.data;

      // Store token in localStorage (or sessionStorage)
      localStorage.setItem("token", token);
      localStorage.setItem("userId", data.id); // Optional: Store user data for later use

      // SweetAlert2 for success notification
      Swal.fire({
        icon: "success",
        title: "Berhasil Masuk!",
        text: response.data.message,
        confirmButtonText: "Lanjutkan",
      }).then(() => {
        // Redirect to dashboard or home page after login
        window.location.href = "/dashboard"; // Redirect to dashboard
      });
    } catch (error) {
      // SweetAlert2 for error notification
      Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="bg-black text-white h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Card Container */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-300">
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
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform hover:bg-gray-700"
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
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform hover:bg-gray-700"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary py-2 px-4 rounded-md text-lg font-medium text-white hover:bg-primary-dark focus:outline-none transition ease-in-out duration-150 transform hover:scale-105"
              >
                {loading ? "Loading..." : "Masuk"}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Belum punya akun?{" "}
              <a
                href="/register"
                className="text-primary font-medium hover:underline"
              >
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
        {/* End of Card */}
      </div>
    </div>
  );
};

export default Login;
