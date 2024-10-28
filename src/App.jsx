import React from "react";
import AdminLayout from "./Layouts/AdminLayout";
import Mahasiswa from "./Pages/Admin/Mahasiswa";

function App() {
  return (
    <AdminLayout>
      <Mahasiswa />
    </AdminLayout>
  );
}

export default App;
