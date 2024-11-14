import React, { useState } from "react";

import "./App.css";
import Container from "@mui/material/Container";

import Home from "./pages/home/index.jsx";

function App() {
  return (
    <>
      <Container maxWidth="xxl">
        <Home />
      </Container>
    </>
  );
}

export default App;
