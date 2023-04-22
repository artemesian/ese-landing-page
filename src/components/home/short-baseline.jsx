import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import TrainingIcon from "../../assets/icons/training.png";
import CertificateIcon from "../../assets/icons/certificate.png";
import ToolsIcon from "../../assets/icons/tools.png";
import AirplaneIcon from "../../assets/icons/airplane.png";

const ShortBaseline = () => {
  const theme = useTheme();
  const shorts = [
    {
      icon: TrainingIcon,
      title: "Formation de Pointe",
      description:
        "Nous offrons des formations de pointe dans les domaines de l’ingénierie, de la gestion et de la technologie.",
    },
    {
      icon: ToolsIcon,
      title: "Formations Pratiques",
      description:
        "Nous offrons des formations de pointe dans les domaines de l’ingénierie, de la gestion et de la technologie.",
    },
    {
      icon: CertificateIcon,
      title: "Expertises Métiers",
      description:
        "Nous offrons des formations de pointe dans les domaines de l’ingénierie, de la gestion et de la technologie.",
    },
    {
      icon: AirplaneIcon,
      title: "Transfert des Étudiants à l'Étranger",
      description:
        "Nous offrons des formations de pointe dans les domaines de l’ingénierie, de la gestion et de la technologie.",
    },
  ];
  return (
    <Box
      style={{
        backgroundColor: "rgba(49, 39, 131, 0.1)",
        width: "100%",
        padding: theme.spacing(4, 5),
      }}
    >
      <Grid
        container
        spacing={3}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {shorts.map((short, index) => (
          <Grid item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "left",
                borderRight:
                  index === shorts.length - 1
                    ? "none"
                    : {
                        sm:
                          index % 2 === 1
                            ? "none"
                            : "1px solid " + theme.palette.primary.main,
                        lg: "1px solid " + theme.palette.primary.main,
                      },
                padding: theme.spacing(0.75),
              }}
            >
              <Box
                width={"100%"}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <img src={short.icon} alt={short.title} />
              </Box>
              <Box
                style={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  style={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    margin: theme.spacing(0.4, 0),
                    textAlign: "left",
                  }}
                >
                  {short.title}
                </Typography>
              </Box>
              {/* <Box>
                <Typography variant="body2" component="p">
                  {short.description}
                </Typography>
              </Box> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShortBaseline;
