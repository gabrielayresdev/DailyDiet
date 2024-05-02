import styled, { css } from "styled-components/native";
import { Animated, TextInput } from "react-native";

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const InputField = styled(
  Animated.createAnimatedComponent(TextInput)
).attrs(() => ({
  textAlignVertical: "top",
}))`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  padding: 14px;
  border-radius: 6px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
