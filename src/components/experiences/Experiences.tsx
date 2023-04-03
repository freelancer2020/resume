import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Experience from "../experience/Experience";

import list from "../../data/experinces/data.json";

const ExperiencesContainer = styled(Paper)(() => ({
  width: "48rem",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const ExperiencesHeader = styled(Typography)(() => ({
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

const Experiences: React.FC = () => {
  return (
    <ExperiencesContainer elevation={6}>
      <Stack spacing={2} padding={2} sx={{ position: "relative" }}>
        <ExperiencesHeader
          variant="h4"
          sx={{ color: "#fff", fontFamily: "Mono Bold" }}
        >
          Experiences
        </ExperiencesHeader>
      </Stack>

      <Stack spacing={2} padding={2}>
        {list.map((exp, index) => (
          <Experience
            key={index}
            src={exp.src}
            title={exp.title}
            company={exp.company}
            year={exp.time}
            brand={exp.brand}
            analyst={exp.analyst}
            end={exp.end}
          />
        ))}
      </Stack>
    </ExperiencesContainer>
  );
};

export default Experiences;
