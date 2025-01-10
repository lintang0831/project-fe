import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Import SweetAlert2 CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import eye icons

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // Username state
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Sending the registration data to the backend (localhost:8080/api/admin/register)
      const response = await axios.post(
        "http://localhost:8080/api/admin/register",
        {
          username,
          email,
          password,
        }
      );

      // SweetAlert2 for success notification
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil!",
        text: response.data.message || "Akun Anda berhasil dibuat.",
        confirmButtonText: "Masuk",
      }).then(() => {
        // Redirect to login page after successful registration
        window.location.href = "/login";
      });
    } catch (error) {
      // SweetAlert2 for error notification
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal!",
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
            <h1 className="text-4xl font-bold text-white">Daftar</h1>
            <p className="mt-2 text-sm text-gray-400">
              Masukkan informasi untuk membuat akun baru
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform hover:bg-gray-700"
                  placeholder="Username"
                  required
                />
              </div>

              {/* Email Field */}
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

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // Correct password visibility toggle
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform hover:bg-gray-700"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary py-2 px-4 rounded-md text-lg font-medium text-white hover:bg-primary-dark focus:outline-none transition ease-in-out duration-150 transform hover:scale-105"
              >
                {loading ? "Loading..." : "Daftar"}
              </button>
            </div>
          </form>
          {/* Link to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Masuk Sekarang
              </a>
            </p>
          </div>
        </div>
        {/* End of Card */}
      </div>
    </div>
  );
};

export default Register;
