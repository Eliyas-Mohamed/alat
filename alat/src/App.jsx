import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/home/index.jsx";
import MasterLayout from "./pages/master-layout";

import { Stack, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopnavBar from "./components/TopnavBar";
function App() {
  return (
    <>
      <CssBaseline />
      <TopnavBar />
      <MasterLayout />
    </>
  );
}

export default App;
