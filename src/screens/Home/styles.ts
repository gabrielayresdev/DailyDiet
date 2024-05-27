import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
`;

export const MealHeader = styled.View`
  margin: 40px 0 32px;
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Meals = styled.View``;
