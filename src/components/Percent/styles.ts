import { Animated, View } from "react-native";
import styled, { css } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

export const Container = styled(Animated.createAnimatedComponent(View))`
  padding: 20px;
  gap: 2px;
  border-radius: 8px;

  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    line-height: ${theme.FONT_SIZE.XXL * 1.3}px;
  `}
  text-align: center;
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
  `}
  text-align: center;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;
