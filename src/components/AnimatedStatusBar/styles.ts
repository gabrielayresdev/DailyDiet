import { Animated, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled(
  Animated.createAnimatedComponent(StatusBar)
).attrs(() => ({
  barStyle: "dark-content",
}))``;
