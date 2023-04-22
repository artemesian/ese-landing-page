import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          "& > *": {
            margin: theme.spacing(1),
          },
          padding: theme.spacing(0, 5),
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <Header />
      </Box>
      <Outlet />
      {/* <Footer /> */}
    </Box>
  );
}
