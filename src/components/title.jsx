import React from "react";
import { Box, Typography } from "@mui/material";
import gridImage from "../assets/images/grid image.png";

const Title = ({ text, style, showGrid }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "left",
        ...style,
      }}
    >
      {showGrid && (
        <img
          src={gridImage}
          alt="grid"
          style={{
            width: "34px",
            height: "34px",
            display: "flex",
            position: "absolute",
            top: "3px",
            left: "-12px",
            zIndex: "2",
          }}
        />
      )}
      <Typography variant="h1">{text}</Typography>
    </Box>
  );
};

export default Title;
