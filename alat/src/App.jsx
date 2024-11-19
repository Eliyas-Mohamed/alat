import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/home/index.jsx";
import MasterLayout from "./pages/master-layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopnavBar from "./components/TopnavBar";

const lightColors = {
  primary: {
    main: "#05283a",
  },
  secondary: {
    main: "#ffffff",
  },
  tertiary: {
    main: "#02518C",
  },
  background: {
    main: "#ffffff",
    light: "#ededed",
  },
  white: {
    main: "#ffffff",
  },
};
const darkColors = {
  primary: {
    main: "#e0e0e0",
  },
  secondary: {
    main: "#ffffff",
  },
  tertiary: {
    main: "#ffffff",
  },
  background: {
    main: "#2a2a2a",
    light: "#1a1a1a",
  },
};
function App() {
  const [mode, setMode] = useState("light");

  const handleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightColors : darkColors),
    },
    typography: {
      h1: {
        fontSize: 32,
        fontWeight: 500,
        marginBottom: 10,
        fontFamily: "karbon-semibold",
      },
      h2: {
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 10,
        fontFamily: "karbon-semibold",
      },
      h3: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 20,
        fontFamily: "karbon-medium",
      },
      h4: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: "karbon-medium",
        marginBottom: 10,
      },
      h5: {
        fontSize: 15,
        fontWeight: 500,
        fontFamily: "karbon-bold",
      },
      h6: {
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 5,
        fontFamily: "karbon-semibold",
      },
      body1: {
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 1,
        fontFamily: "karbon",
        marginBottom: 5,
      },
      body2: {
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 1,
        fontFamily: "karbon",
        marginBottom: 5,
      },
      body3: {
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 1,
        fontFamily: "karbon",
        marginBottom: 5,
      },
      body4: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1,
        fontFamily: "karbon",
        marginBottom: 5,
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: 14,
        fontFamily: "karbon-semibold",
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: 13,
        fontFamily: "karbon-semibold",
      },
      subtitle3: {
        fontWeight: 600,
        fontSize: 11,
        fontFamily: "Inter",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopnavBar />
        <MasterLayout setTheme={handleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
