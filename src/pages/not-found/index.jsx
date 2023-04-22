// default beautiful 404 page made with material ui

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, useTheme } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        "& > *": {
          margin: theme.spacing(1),
        },
      }}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page not found
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        startIcon={<ArrowBack />}
      >
        Go back
      </Button>
    </div>
  );
}
