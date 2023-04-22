import { createTheme } from "@mui/material/styles";

const PRIMARY = "#143592";
const LINE = "#12192C";
const SECONDARY = "#46D246";

const theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    error: {
      main: "#EF233C",
    },
    success: {
      main: "#91E411",
    },
  },
  common: {
    line: LINE,
    inputBackground: "#28293D",
    background: "#1C1C28",
    adminBackground: "#1C1C28",
    adminElement: "#1D1D1D",
    offWhite: "#726F6F",
    placeholder: LINE,
    label: LINE,
    body: "#1e1e1e",
    titleActive: PRIMARY,
    dialogBackground: "#1C1C28",
    white: "#fff",
    black: "#000",
  },
  typography: {
    fontFamily: ["Inter", "Libre Franklin", "sans-serif"].join(","),
    h1: {
      fontSize: "3.875rem",
      fontWeight: 800,
      color: "#1e1e1e",
    },
    h2: {
      fontSize: "3.125rem",
      fontWeight: 700,
      color: "#1e1e1e",
    },
    h3: {
      fontSize: "1.5625rem",
      fontWeight: 500,
      color: "#1e1e1e",
    },
    h4: {
      fontSize: "1.4625rem",
      fontWeight: 500,
      color: "#1e1e1e",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#1e1e1e",
      fontFamily: "Inter",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#1e1e1e",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#1e1e1e",
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#1e1e1e",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 740,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
