import React, { Fragment, useState } from "react";
import {
  Box,
  IconButton,
  SwipeableDrawer,
  Tooltip,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ESELogo from "../assets/images/ese logo.png";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import SimpleCustomButton from "./simple-custom-button";

import "./header.styles.scss";
import { MenuRounded } from "@mui/icons-material";

export default function Header() {
  const theme = useTheme();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSideBarOpen(!isSideBarOpen);
  };

  const SideNav = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.common.white,
        height: "100%",
        paddingTop: theme.spacing(5),
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(3),
              color: theme.palette.primary.main,
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            Accueil
          </Typography>
        </Link>
        <Link to="/apropos" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(3),
              color: theme.palette.primary.main,
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            A propos
          </Typography>
        </Link>
        <Link to="/nos-formation" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(3),
              color: theme.palette.primary.main,
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            Nos formations
          </Typography>
        </Link>
        <Link to="/international" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(3),
              color: theme.palette.primary.main,
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            International
          </Typography>
        </Link>
        <Link to="/etablissement" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(3),
              color: theme.palette.primary.main,
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.15s ease-in-out",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            Etablissement
          </Typography>
        </Link>
      </Box> */}
      <Box
        sx={{
          padding: theme.spacing(3),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SimpleCustomButton
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid" + theme.palette.primary.main,
            borderRadius: "5px",
            color: theme.palette.primary.main,
            fontWeight: "bold",
            "&:hover": {
              border: "1px solid" + theme.palette.secondary.main,
              boxShadow: "none",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white,
            },
          }}
        >
          Coming Soon
        </SimpleCustomButton>
      </Box>
    </Box>
  );

  return (
    <Fragment>
      <Box
        sx={{
          padding: theme.spacing(2.2, 0),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.15s ease-in-out",
          "& > *": {
            textDecoration: "none",
          },
        }}
      >
        <Box sx={{ height: { lg: "65px", xs: "50px" } }}>
          <Link to="/">
            <img src={ESELogo} alt="ESE Logo" height="100%" />
          </Link>
        </Box>

        <Box
          sx={{
            display: { lg: "flex", xs: "none" },
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "0px",
            gap: theme.spacing(6.5),
            textDecoration: "none",
          }}
        >
          {/*
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                transition: "all 0.15s ease-in-out",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Accueil
            </Typography>
          </Link>
          <Link
            to="/apropos"
            style={{ textDecoration: "none" }}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                transition: "all 0.15s ease-in-out",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              À propos
            </Typography>
          </Link>
          <Link
            to="/nos-formation"
            style={{ textDecoration: "none" }}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                transition: "all 0.15s ease-in-out",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Nos formations
            </Typography>
          </Link>
          <Link
            to="/international"
            style={{ textDecoration: "none" }}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                transition: "all 0.15s ease-in-out",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              International
            </Typography>
          </Link>
          <Link
            to="/etablissement"
            style={{ textDecoration: "none" }}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            <Typography
              variant="h5"
              sx={{
                transition: "all 0.15s ease-in-out",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Etablissement
            </Typography>
          </Link>
        */}
          <SimpleCustomButton
            sx={{
              display: { lg: "flex", xs: "none" },
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid" + theme.palette.primary.main,
              borderRadius: "5px",
              color: theme.palette.primary.main,
              fontWeight: "bold",
              "&:hover": {
                border: "1px solid" + theme.palette.secondary.main,
                boxShadow: "none",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.common.white,
              },
            }}
            link="/inscription"
          >
            COMING SOON
          </SimpleCustomButton>
        </Box>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: {
              lg: "none",
              xs: "initial",
              width: "50px",
              height: "50px",
            },
          }}
        >
          <MenuRounded color="primary" fontSize="large" />
        </IconButton>
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={isSideBarOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <SideNav />
      </SwipeableDrawer>
    </Fragment>
  );
}
