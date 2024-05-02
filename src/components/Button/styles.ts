import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export type ButtonStyleProps = {
  flex?: boolean;
};

export const Container = styled(Animated.View)<ButtonStyleProps>`
  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}
  border-radius: 6px;
  overflow: hidden;

  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<Props>`
  ${({ type, theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_700};
  `}
`;
