import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
