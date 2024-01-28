import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPage from "./Pages/AlbumPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Player from "./Components/Player.jsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={`/albums/:id`} element={<AlbumPage />} />
      </Routes>
      <Player />
    </BrowserRouter>
  </RecoilRoot>
);
