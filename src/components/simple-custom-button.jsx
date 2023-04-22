// custom button component

import React from "react";
import { Button, useTheme } from "@mui/material";

export default function SimpleCustomButton({ children, sx, ...props }) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        padding: theme.spacing(1.4, 2.4),
        textTransform: "initial",
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "Inter",
        lineHeight: "19px",
        ...sx,
      }}
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
}
