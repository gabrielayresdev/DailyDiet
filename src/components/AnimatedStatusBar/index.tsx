import React from "react";
import { Container } from "./styles";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";

const AnimatedStatusBar = () => {
  const context = useStatusBar();

  React.useEffect(() => {
    console.log(context?.handleChange);
  }, [context]);

  return <Container backgroundColor={context?.StatusBarStyles}></Container>;
};

export default AnimatedStatusBar;
