import { Stack } from "@mui/material";
import Header from "../micro-layouts/header/Header";
import Section from "../micro-layouts/section/Section";
import Footer from "../micro-layouts/footer/Footer";

const MacroLayout: React.FC = () => {
  return (
    <Stack
      spacing={2}
      sx={{ height: "172rem", width: "100%", position: "relative" }}
    >
      <Header />
      <main>
        <Section />
      </main>
      <Footer />
    </Stack>
  );
};

export default MacroLayout;
