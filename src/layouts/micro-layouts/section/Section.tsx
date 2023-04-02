import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";

import Contact from "../../../components/contact/Contact";
import Languages from "../../../components/languages/Languages";
import Skills from "../../../components/skills/Skills";

const SectionContainer = styled(Box)(() => ({
  height: "20rem",
  marginTop: "4rem",
  display: "flex"
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
        <Languages />
      </SectionLeft>
      <Stack>
        <Skills />
      </Stack>
    </SectionContainer>
  );
};

export default Section;
