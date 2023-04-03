import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";

import Contact from "../../../components/contact/Contact";
import Languages from "../../../components/languages/Languages";
import Skills from "../../../components/skills/Skills";
import Education from "../../../components/education/Education";
import Experiences from "../../../components/experiences/Experiences";
import OpenSource from "../../../components/open-source/OpenSource";

const SectionContainer = styled(Box)(() => ({
  height: "20rem",
  marginTop: "2rem",
  display: "flex",
}));

const SectionLeft = styled(Stack)(() => ({
  width: "30rem",
  height: "fit-content",
}));

const Section: React.FC = () => {
  return (
    <SectionContainer>
      <SectionLeft spacing={2}>
        <Contact />
        <Education />
        <OpenSource />
        <Languages />
      </SectionLeft>
      <Stack spacing={2}>
        <Experiences />
        <Skills />
      </Stack>
    </SectionContainer>
  );
};

export default Section;
