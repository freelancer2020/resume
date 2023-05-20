import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

import "./App.css";
import bk from "./assets/bk.webp";

import MacroLayout from "./layouts/macro-layout/MacroLayout";

const AppContainer = styled(Container)(() => ({
  // background: `url(${bk})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
}));

const App: React.FC = () => {
  return (
    <AppContainer disableGutters maxWidth="lg">
      <MacroLayout />
    </AppContainer>
  );
};

export default App;
