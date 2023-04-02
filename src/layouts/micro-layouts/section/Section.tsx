import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Contact from "../../../components/contact/Contact";

const SectionContainer = styled(Box)(() => ({
  height: "20rem",
  marginTop: "4rem",
}));

const SectionLeft = styled(Box)(() => ({
  width: "30rem",
  height: "20rem"
}));
const Section: React.FC = () => {
  return (
    <SectionContainer>
      <SectionLeft>
        <Contact />
      </SectionLeft>
    </SectionContainer>
  );
};

export default Section;
