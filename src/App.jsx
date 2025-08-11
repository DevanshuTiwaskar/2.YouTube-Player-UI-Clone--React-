import React from "react";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/SideBar";
import VideoGrid from "./Components/VideoGrid";


const App = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
};

export default App;
