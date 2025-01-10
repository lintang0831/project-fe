// utils/auth.js
export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken"); // Change from 'token' to 'authToken'
  return !!token; // Returns true if a token exists, otherwise false
};
