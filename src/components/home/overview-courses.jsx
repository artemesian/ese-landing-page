import React from "react";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import Title from "../title";
import SimpleCustomButtonV2 from "../simple-custom-button-2";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

const OverviewCourses = () => {
  const theme = useTheme();

  const [activeCourse, setActiveCourse] = React.useState(0);

  const courses = [
    {
      title: "Management des Ressources Humaines",
      cycles: ["Master", "Bachelor"],
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis, ullamcorper ultricies Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis.`,
      image:
        "https://img.freepik.com/photos-gratuite/confiant-tenant-livres-stylo-jeune-homme-afro-americain-portant-ecouteurs-cou-isole-fond-bleu_141793-136497.jpg?size=626&ext=jpg",
      slug: "management-des-ressources-humaines",
    },
    {
      title: "Commerce International",
      cycles: ["BTS"],
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis, ullamcorper ultricies Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis.`,
      image:
        "https://img.freepik.com/photos-gratuite/africain-beauti-americain-afro-adulte_1303-1372.jpg?size=626&ext=jpg",
      slug: "commerce-international",
    },
    {
      title: "Négociateur d'Affaires",
      cycles: ["Bachelor"],
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis, ullamcorper ultricies Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan a, pulvinar proin faucibus ante massa praesent nunc mattis.`,
      image:
        "https://img.freepik.com/photos-gratuite/homme-affaires-africain-americain-au-restaurant_1303-9408.jpg?size=626&ext=jpg",
      slug: "negociateur-d-affaires",
    },
  ];

  // create a function to switch between courses when clicking on the arrows buttons on the left and right of the course card
  const handleCourseSwitch = (direction) => {
    if (direction === "left") {
      if (activeCourse === 0) {
        setActiveCourse(courses.length - 1);
      } else {
        setActiveCourse(activeCourse - 1);
      }
    } else {
      if (activeCourse === courses.length - 1) {
        setActiveCourse(0);
      } else {
        setActiveCourse(activeCourse + 1);
      }
    }
  };

  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          margin: "auto",
          paddingX: theme.spacing(2),
          marginY: theme.spacing(7),
        }}
      >
        <Title
          text={<span>Les domaines dans lesquels nous enseignons</span>}
          style={{
            fontWeight: "800",
            textAlign: "center",
            padding: "0px",
          }}
          showGrid={false}
        />
      </Box>
      <Box
        sx={{
          padding: theme.spacing(0, 5),
          width: "100%",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: theme.palette.secondary.main + "1A",
            padding: theme.spacing(5, 5, 4, 5),
            borderRadius: "20px",
            alignItems: "flex-start",
          }}
        >
          <Grid item xs={12} sm={3.5}>
            <img
              src={courses[activeCourse].image}
              alt="placeholder"
              width="100%"
              style={{
                borderRadius: "20px",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8.5}
            sx={{
              padding: {
                xs: theme.spacing(0),
                sm: theme.spacing(0, 0, 0, 5),
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      fontWeight: "bold",
                      margin: theme.spacing(0.4, 0),
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontSize: { xs: "30px", sm: "50px" },
                    }}
                  >
                    {courses[activeCourse].title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: theme.spacing(0.5),
                    }}
                  >
                    {courses[activeCourse].cycles.map((cycle) => (
                      <Box
                        sx={{
                          color: "black",
                          backgroundColor: theme.palette.secondary.main + "B1",
                          marginRight: theme.spacing(1),
                          fontWeight: "600",
                          padding: theme.spacing(0.5, 1),
                          borderRadius: "20px",
                        }}
                      >
                        {cycle}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: { xs: "18px", sm: "20px" },
                      lineHeight: "28px",
                      padding: theme.spacing(2, 0, 3, 0),
                    }}
                  >
                    {courses[activeCourse].description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <SimpleCustomButtonV2 link="">
                    Voir la formation
                  </SimpleCustomButtonV2>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginLeft: theme.spacing(1),
                    }}
                  >
                    <IconButton
                      onClick={() => handleCourseSwitch("left")}
                      sx={{
                        border: "1px solid " + theme.palette.secondary.main,
                        color: theme.palette.secondary.main,
                        "&: hover": {
                          backgroundColor: theme.palette.secondary.main,
                          "*": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      <ArrowBackRounded color="secondary" fontSize="large" />
                    </IconButton>
                    &nbsp; &nbsp;
                    <IconButton
                      onClick={() => handleCourseSwitch("right")}
                      sx={{
                        border: "1px solid " + theme.palette.secondary.main,
                        color: theme.palette.secondary.main,
                        "&: hover": {
                          backgroundColor: theme.palette.secondary.main,
                          "*": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      <ArrowForwardRounded color="secondary" fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: theme.spacing(4, 0),
        }}
      >
        <SimpleCustomButtonV2 link="" variant="text">
          DECOUVREZ NOS FORMATIONS
        </SimpleCustomButtonV2>
      </Box>
    </Box>
  );
};

export default OverviewCourses;
