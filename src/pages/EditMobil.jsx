import React, { useState, useEffect } from "react";

const EditMobil = ({ onEditCar, onClose, carToEdit }) => {
  const [editedCar, setEditedCar] = useState({
    photo: "",
    brand: "",
    licensePlate: "",
    year: "",
    model: "",
    color: "",
  });

  // Initialize state with carToEdit data when component mounts
  useEffect(() => {
    if (carToEdit) {
      setEditedCar({
        photo: carToEdit.photo || "",
        brand: carToEdit.brand || "",
        licensePlate: carToEdit.licensePlate || "",
        year: carToEdit.year || "",
        model: carToEdit.model || "",
        color: carToEdit.color || "",
      });
    }
  }, [carToEdit]);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  // Handler for saving edited car details
  const handleEditCar = () => {
    // Validate that all fields are filled
    if (
      !editedCar.photo ||
      !editedCar.brand ||
      !editedCar.licensePlate ||
      !editedCar.year ||
      !editedCar.model ||
      !editedCar.color
    ) {
      alert("Please fill in all fields.");
      return; // Don't proceed if any field is missing
    }

    const updatedCar = { ...editedCar, id: carToEdit.id }; // Keep the original car ID
    onEditCar(updatedCar); // Pass updated car data to parent
    onClose(); // Close modal after editing
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full sm:w-96 max-w-2xl transition-transform transform scale-105 hover:scale-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Edit Mobil
        </h3>

        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {[
            {
              label: "Foto",
              name: "photo",
              type: "text",
              placeholder: "Masukkan URL foto",
            },
            {
              label: "Merk Mobil",
              name: "brand",
              type: "text",
              placeholder: "Masukkan merk mobil",
            },
            {
              label: "Plat Nomor",
              name: "licensePlate",
              type: "text",
              placeholder: "Masukkan plat nomor",
            },
            {
              label: "Tahun Mobil",
              name: "year",
              type: "text",
              placeholder: "Masukkan tahun mobil",
            },
            {
              label: "Model Mobil",
              name: "model",
              type: "text",
              placeholder: "Masukkan model mobil",
            },
            {
              label: "Warna Mobil",
              name: "color",
              type: "text",
              placeholder: "Masukkan warna mobil",
            },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={editedCar[field.name]}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleEditCar}
            className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg shadow-md hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMobil;
