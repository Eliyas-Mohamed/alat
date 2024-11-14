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
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: 10,
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
    },
    h5: {
      fontSize: 15,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1,
    },
    body2: {
      fontWeight: 400,
      fontSize: 18,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: 14,
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
