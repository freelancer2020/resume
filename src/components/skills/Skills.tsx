import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import SkillsCard from "../skills-card/SkillsCard";

import cards from "../../data/skills.json";

const SkillsContainer = styled(Paper)(() => ({
  width: "48rem",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const SkillsHeader = styled(Typography)(() => ({
  color: "#fff",
  fontFamily: "Mono Bold",
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

const Container = styled(Stack)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
}));

const Typo = styled(Typography)(() => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
}));

const Skills: React.FC = () => {
  return (
    <SkillsContainer elevation={6}>
      <Stack spacing={2} padding={2} sx={{ position: "relative" }}>
        <SkillsHeader variant="h4">Skills</SkillsHeader>
      </Stack>
      <Container direction={"row"} padding={2} rowGap={2} columnGap={2}>
        {cards.map((card, index) => (
          <SkillsCard
            key={index}
            cardName={card.name}
            cardContent={card.content}
            cardMedia={card.media}
          />
        ))}
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
