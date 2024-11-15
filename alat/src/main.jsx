import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#05283a",
    },
    secondary: {
      main: "#ffffff",
    },
    tertiary: {
      main: "#02518C",
    },
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
