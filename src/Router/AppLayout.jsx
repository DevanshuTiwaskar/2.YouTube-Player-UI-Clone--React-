// src/AppLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main
          className={`flex-1 transition-all duration-300 p-4 ${
            sidebarOpen ? "ml-60" : "ml-0"
          }`}
        >
          <Outlet /> {/* Child pages render here */}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
