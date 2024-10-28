// src/Pages/Admin/Mahasiswa.jsx
import React, { useState } from "react";
import Button from "../../Components/Button";
import Table from "../../Components/Table";

const Mahasiswa = () => {
  const [data, setData] = useState([
    { nim: "A11.2022.14082", nama: "John Doe" },
    { nim: "A11.2022.14123", nama: "Jane Smith" },
    { nim: "A11.2022.14141", nama: "Alice Johnson" },
  ]);

  const handleTambahMahasiswa = () => {
    console.log("Add Mahasiswa");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Mahasiswa</h1>
        <Button
          style="bg-green-500 hover:bg-green-600"
          text="Tambah Mahasiswa"
          onClick={handleTambahMahasiswa}
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Mahasiswa;
