import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import ESELogo from "../assets/images/ese logo.png";
import BlurredGreen from "../assets/images/blurred green.png";
import {
  EmailRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

const ComingSoon = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/%C3%A9cole-sup%C3%A9rieure-europ%C3%A9enne",
      icon: <LinkedIn sx={{ fontSize: 30, color: "#1E1E1E" }} />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100091322303146",
      icon: <FacebookRounded sx={{ fontSize: 30, color: "#1E1E1E" }} />,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/message/GSXGNGOBCGB4J1",
      icon: <WhatsApp sx={{ fontSize: 30, color: "#1E1E1E" }} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ecole_superieure_europeenne_/",
      icon: <Instagram sx={{ fontSize: 30, color: "#1E1E1E" }} />,
    },
    {
      name: "Mail",
      link: "mailto:info@ecolesup-euro.fr",
      icon: <EmailRounded sx={{ fontSize: 30, color: "#1E1E1E" }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "",
        display: "grid",
        gridTemplateColumn: "1fr auto 1fr",
      }}
    >
      {/*Top blurred effect*/}
      <img
        src={BlurredGreen}
        alt="blurred green on ESE"
        style={{
          position: "fixed",
          zIndex: "-1",
          bottom: 0,
          right: 0,
          width: "50%",
          maxWidth: "700px",
        }}
      />
      {/*Bottom blurred effect*/}
      <img
        src={BlurredGreen}
        alt="blurred green on ESE"
        style={{
          position: "fixed",
          zIndex: "-1",
          top: 0,
          left: 0,
          rotate: "180deg",
          width: "50%",
          maxWidth: "700px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ESELogo}
          alt="ESE Logo"
          style={{
            width: "45%",
            maxWidth: "236px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            fontFamily: "'Libre Franklin'",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "calc(30px + 4vw)",
            lineHeight: "120px",
            textAlign: "center",
            background: "linear-gradient(90deg, #46D246 55.73%, #312783 75%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Coming Soon!
        </Typography>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "800",
            fontFamily: "Libre Franklin",
            margin: "20px 0",
          }}
        >
          76%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
          }}
        >
          Stay tuned
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {socialMedia.map((item) => (
            <Box
              sx={{
                borderRadius: "50%",
                padding: "15px",
                background: "#FFFFFF",
                boxShadow: "0px 6px 0px rgba(157, 210, 157, 0.27)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15px",
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tooltip title={item.name}>{item.icon}</Tooltip>
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
