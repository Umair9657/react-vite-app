// src/components/Register.jsx
import { useState } from 'react';
import * as XLSX from 'xlsx';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const worksheet = XLSX.utils.json_to_sheet([userData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "UserData.xlsx");

    alert("User data saved to Excel!");
    setUserData({ name: '', email: '', phone: '', age: '' });
  };

  return (
    <div className="bg-gray-300 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-600 p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userData.age}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

