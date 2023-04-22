// custom button component

import React from "react";
import { Button, useTheme } from "@mui/material";
import { EastRounded } from "@mui/icons-material";

export default function SimpleCustomButtonV2({ children, sx, ...props }) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        padding: theme.spacing(1.4, 2.4),
        textTransform: "initial",
        fontSize: "16px",
        fontWeight: "500",
        textDecoration: props.variant === "text" ? "underline" : "none",
        fontFamily: "Inter",
        lineHeight: "19px",
        color: props.variant === "text" ? "black" : theme.palette.common.white,
        boxShadow: "none",
        border:
          props.variant === "text"
            ? "none"
            : `1px solid ${theme.palette.secondary.main}`,
        "&:hover":
          props.variant === "text"
            ? {
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
                boxShadow: "none",
                fontWeight: "500",
              }
            : {
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
                boxShadow: "none",
                border: `1px solid ${theme.palette.secondary.main}`,
                fontWeight: "500",
              },
        ...sx,
      }}
      variant="contained"
      color="secondary"
      {...props}
    >
      {children}
      <EastRounded fontSize="small" sx={{ margin: theme.spacing(0, 1) }} />

      <EastRounded fontSize="medium" />
    </Button>
  );
}
