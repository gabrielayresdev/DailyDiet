import styled, { css } from "styled-components/native";

export type MealTypeStyleProps = "SUCCESS" | "FAILURE";

type Props = {
  type: MealTypeStyleProps;
};

export const Container = styled.View<Props>`
  background-color: ${({ type, theme }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  gap: 24px;
  padding: 40px 24px;
`;

export const TextGroupContainer = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const Paragraph = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Circle = styled.View<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 4px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 100px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  gap: 9px;
  margin-top: auto;
`;
