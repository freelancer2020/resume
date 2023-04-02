import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import {
  MailOutline,
  PhoneAndroid,
  LinkedIn,
  Public,
  Place
} from "@mui/icons-material";

const ContactContainer = styled(Paper)(() => ({
  width: "fit-content",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const HeaderContact = styled(Typography)(() => ({
  color: "#fff",
  "&:before": {
    content: '""',
    position: "absolute",
    left: "7%",
    bottom: "30",
    width: "80px",
    height: "14px",
    transform: " skew(-12deg) translateX(-50%)",
    background: "rgba(255, 240, 0, .5)",
    zIndex: "1",
    marginTop: "30px",
  },
}));

const Typo = styled(Typography)(() => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
}));

const Contact: React.FC = () => {
  return (
    <ContactContainer elevation={6}>
      <Stack spacing={2} padding={2}>
        <HeaderContact variant="h4" sx={{ color: "#fff" }}>
          Contact
        </HeaderContact>
      </Stack>

      <Stack spacing={2} padding={2}>
        <Typo variant="body2">
          {" "}
          <PhoneAndroid sx={{ marginRight: ".5rem" }} /> +48 786 110 486
        </Typo>
        <Typo variant="body2">
          <MailOutline sx={{ marginRight: ".5rem" }} />{" "}
          mustafa.husseiny@gmail.com
        </Typo>
        <Typo variant="body2">
          <LinkedIn sx={{ marginRight: ".5rem" }} />
          https://www.linkedin.com/in/mostafa-m-33189270/
        </Typo>
        <Typo variant="body2">
          <Place sx={{ marginRight: ".5rem" }} />
          Warsaw, Poland
        </Typo>
      </Stack>
    </ContactContainer>
  );
};

export default Contact;
