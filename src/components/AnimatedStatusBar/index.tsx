import React from "react";
import { Container } from "./styles";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";

const AnimatedStatusBar = () => {
  const context = useStatusBar();

  if (context)
    return <Container backgroundColor={context?.StatusBarStyles}></Container>;
  else return null;
};

export default AnimatedStatusBar;
