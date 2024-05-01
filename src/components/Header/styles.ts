import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import styled, { css } from "styled-components/native";

type Props = {
  color: string;
};

export const Container = styled.View<Props>`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 24px;
  background: ${({ color }) => color};
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  flex: 1;
  text-align: center;
  padding-right: 24px;
`;
