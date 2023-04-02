import { Stack } from "@mui/material";
import Header from "../micro-layouts/header/Header";
import Section from "../micro-layouts/section/Section";

const MacroLayout: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Header />
      <main>
        <Section />
      </main>
      <footer></footer>
    </Stack>
  );
};

export default MacroLayout;
