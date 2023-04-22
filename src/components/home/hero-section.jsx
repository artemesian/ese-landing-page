import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../title";
import theme from "../../theme/theme";
import SimpleCustomButtonV2 from "../simple-custom-button-2";
import HeroSectionImage from "../../assets/images/ese hero section.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: theme.spacing(0, 5),
      }}
    >
      <Box
        sx={{
          minHeight: "calc(100vh - 120px)",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          height: "auto",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              minHeight: "calc(100vh - 120px)",
              height: "auto",
              padding: "25px",
            }}
          >
            <Typography
              component={"span"}
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Ecole superieure europeenne
            </Typography>
            <Title
              text={
                <span>
                  Transcender les frontières de votre{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Potentiel.
                  </span>
                </span>
              }
              style={{ fontWeight: "800", margin: theme.spacing(4, 0, 2, 0) }}
              showGrid={true}
            />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "inter",
                lineHeight: "24px",
                marginBottom: theme.spacing(4),
              }}
            >
              La mission de <b>L’ECOLE SUPERIEURE EUROPEENNE</b> est de rendre
              l’excellence pédagogique accessible à tous. Nous formons un public
              constituer de jeunes, salaries et demandeurs d’emploi.
            </Typography>
            <SimpleCustomButtonV2
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                height: "52px",
              }}
            >
              COMING SOON!!
            </SimpleCustomButtonV2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing(4, 0),
            }}
          >
            <img
              src={HeroSectionImage}
              alt="hero-section"
              style={{
                width: "100%",
                maxWidth: "700px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
