import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import TrainingIcon from "../../assets/icons/training.png";
import CertificateIcon from "../../assets/icons/certificate.png";
import ToolsIcon from "../../assets/icons/tools.png";
import AirplaneIcon from "../../assets/icons/airplane.png";
import Title from "../title";
import SimpleCustomButton from "../simple-custom-button";
import SimpleCustomButtonV2 from "../simple-custom-button-2";

const OverviewNews = () => {
  const theme = useTheme();

  const news = [
    {
      title: "Digital College visite ESE cette semaine",
      description: `Digital College visite ESE cette semaine. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem.`,
      image:
        "https://img.freepik.com/photos-premium/trois-etudiantes-africaines-ont-pose-sacs-dos-articles-scolaires-dans-cour-universite-regardent-tablette_627829-13636.jpg?size=626&ext=jpg",
      date: "30.03.2023",
    },
    {
      title: "Digital College visite ESE cette semaine",
      description: `Digital College visite ESE cette semaine. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem.`,
      image:
        "https://img.freepik.com/photos-gratuite/femme-affaires-partenaire-dans-ville_1157-17036.jpg?size=626&ext=jpg",
      date: "30.03.2023",
    },
    {
      title: "Digital College visite ESE cette semaine",
      description: `Digital College visite ESE cette semaine. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem.`,
      image:
        "https://img.freepik.com/photos-gratuite/etudiant-afro-americain-marchant-dans-rue_1303-12691.jpg?size=626&ext=jpg",
      date: "30.03.2023",
    },
  ];

  return (
    <Box
      style={{
        backgroundColor: "rgba(49, 39, 131, 0.1)",
        width: "100%",
        padding: theme.spacing(4, 8, 0, 8),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginY: theme.spacing(4),
        }}
      >
        <Title
          text={<span>Actualités</span>}
          style={{
            fontWeight: "800",
            textAlign: "center",
            padding: "0px",
          }}
          showGrid={false}
        />
      </Box>
      <Grid container spacing={5}>
        <Grid container item xs={12} md={4}>
          <Grid item xs={12}>
            <Box>
              <img
                src={news[0].image}
                alt="news"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  fontSize: "11px",
                }}
              >
                Écris le{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  {news[0].date}
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "650",
                  fontFamily: "Inter",
                  fontSize: "32px",
                  lineHeight: "39px",
                  padding: theme.spacing(1.5, 0, 0, 0),
                }}
              >
                {news[0].title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  lineHeight: "19px",
                  padding: theme.spacing(1, 0, 2, 0),
                }}
              >
                {news[0].description}
              </Typography>
              <SimpleCustomButtonV2
                sx={{
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
                Lire la suite
              </SimpleCustomButtonV2>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={8} rowSpacing={3}>
          <Grid
            container
            item
            xs={12}
            spacing={2.5}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingBottom: theme.spacing(3),
              borderBottom: "1px solid" + theme.palette.primary.main + "33",
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                height: { xs: "auto", md: "100%" },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  maxHeight: { xs: "400px", md: "250px" },
                }}
              >
                <img
                  src={news[1].image}
                  alt="news"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Inter",
                    fontSize: "11px",
                  }}
                >
                  Écris le{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    {news[1].date}
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "650",
                    fontFamily: "Inter",
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  {news[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "19px",
                    padding: theme.spacing(1, 0, 2, 0),
                  }}
                >
                  {news[1].description}
                </Typography>
                <SimpleCustomButtonV2
                  sx={{
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
                  Lire la suite
                </SimpleCustomButtonV2>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2.5}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingBottom: theme.spacing(3),
              borderBottom: "1px solid" + theme.palette.primary.main + "33",
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                height: { xs: "auto", md: "100%" },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  maxHeight: { xs: "400px", md: "250px" },
                }}
              >
                <img
                  src={news[2].image}
                  alt="news"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Inter",
                    fontSize: "11px",
                  }}
                >
                  Écris le{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    {news[2].date}
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "650",
                    fontFamily: "Inter",
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  {news[2].title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "19px",
                    padding: theme.spacing(1, 0, 2, 0),
                  }}
                >
                  {news[2].description}
                </Typography>
                <SimpleCustomButtonV2
                  sx={{
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
                  Lire la suite
                </SimpleCustomButtonV2>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: theme.spacing(4, 0),
        }}
      >
        <SimpleCustomButtonV2 link="" variant="text">
          TOUTES NOS ACTUALITÉS
        </SimpleCustomButtonV2>
      </Box>
    </Box>
  );
};

export default OverviewNews;
