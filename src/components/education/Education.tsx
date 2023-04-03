import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { School } from "@mui/icons-material";
const EducationContainer = styled(Paper)(() => ({
  width: "48rem",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const EducationHeader = styled(Typography)(() => ({
  color: "#fff",
  "&:before": {
    position: "absolute",
    content: '""',
    left: "6%",
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

const Education: React.FC = () => {
  return (
    <EducationContainer elevation={6}>
      <Stack spacing={2} padding={2} sx={{ position: "relative" }}>
        <EducationHeader variant="h4" sx={{ color: "#fff" }}>
          Education
        </EducationHeader>
      </Stack>

      <Stack spacing={2} padding={2}>
        <Typo>
          {" "}
          <School sx={{marginRight: ".5rem"}} />
          Bachelor's degree in computer science
        </Typo>
      </Stack>
    </EducationContainer>
  );
};

export default Education;
