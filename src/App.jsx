import React from "react";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import VideoGrid from "./Components/VideoGrid";
import PlayerPage from "./Components/PlayerPage";
import AppLayout from "./Router/AppLayout";
import AppRouter from "./Router/AppRouter";

const App = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(true); // keep true for desktop look

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <AppRouter/>
    </div>
   
  );
};

export default App;
