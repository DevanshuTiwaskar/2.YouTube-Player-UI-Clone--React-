// src/AppRouter.jsx
import React from "react";
import { Route, Router, Routes } from "react-router";
import AppLayout from "./AppLayout";
import VideoGrid from "../Components/VideoGrid";
import PlayerPage from "../Components/PlayerPage";

const AppRouter = () => {
  return (
    
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<VideoGrid />} />
          <Route path="/watch/:id" element={<PlayerPage/>} />
        </Route>
      </Routes>
    
  );
};

export default AppRouter;
