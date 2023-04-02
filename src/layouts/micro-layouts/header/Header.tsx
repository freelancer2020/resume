import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import timo from "../../../assets/timo.jpg";

const HeaderContainer = styled(Box)(() => ({
  height: "15rem",
  borderRadius: "0 0 5px 5px",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  display: "flex",
  boxSizing: "border-box",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  position: "relative",
}));

const ImageContainer = styled(Box)(() => ({
  width: "15rem",
  height: "15rem",
  marginTop: "2rem",
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 60px 40px -7px",
  position: "relative",
}));

const Bio = styled(Box)(() => ({
  width: "35rem",
  marginLeft: "8rem",
  marginTop: "2rem",
}));

const LineName = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  width: "15rem",
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(5px)",
  height: "2.5rem",
  borderRadius: "0px 0px 5px 5px",
  marginBottom: "-2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <img
          style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          src={timo}
          alt=""
        />
      </ImageContainer>
      <Bio>
        <Typography
          variant="body1"
          sx={{ color: "#fff" }}
        >
          Innovative, creative and skilled Front-End developer, possess a tech
          degree in Front-End Development and have 5 years of experience of
          building and maintaining eCommerce/systems websites and web
          applications, very strong skilled in JavaScript, React and nodeJs,
          demonstrated history of working in the information technology,
          services industry and strong quality assurance with a bachelor’s
          degree.
        </Typography>
      </Bio>
      <LineName>
        <Typography
          variant="body1"
          children="Mostafa Mohamed"
          sx={{ color: "#fff", fontSize: "20px" }}
        />
      </LineName>
    </HeaderContainer>
  );
};

export default Header;
