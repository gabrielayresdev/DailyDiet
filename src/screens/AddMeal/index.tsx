import Header from "@components/Header";
import React from "react";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";

const AddMead = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);
  return (
    <Container>
      <Header title="Nova refeição" color={theme.COLORS.GRAY_300} />
    </Container>
  );
};

export default AddMead;
