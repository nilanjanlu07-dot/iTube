import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar onMenuToggle={() => setCollapsed((value) => !value)} />

      <div className="flex">
        <Sidebar collapsed={collapsed} />

        <main className="min-w-0 flex-1"><Outlet /></main>
      </div>
    </div>
  );
}

export default MainLayout;
