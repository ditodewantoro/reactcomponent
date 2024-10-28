const Sider = () => {
  return (
    <aside className="w-64 bg-indigo-900 p-4">
      <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
      <nav>
        <ul className="text-white p-4">
          <li className="p-2 hover:bg-white hover:text-black">
            <a href="#">Dashboard</a>
          </li>
          <li className="p-2 hover:bg-white hover:text-black">
            <a href="#">Mahasiswa</a>
          </li>
          <li className="p-2 hover:bg-white hover:text-black">
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sider;