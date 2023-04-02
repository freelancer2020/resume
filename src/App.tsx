import React from "react";
import { Container } from "@mui/material";

import "./App.css";

import MacroLayout from "./layouts/macro-layout/MacroLayout";

const App: React.FC = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <MacroLayout />
    </Container>
  );
};

export default App;
