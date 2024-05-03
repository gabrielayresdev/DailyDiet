import styled, { css } from "styled-components/native";

export type ConclusionTypeStyleProps = "SUCCESS" | "FAILURE";

type Props = {
  type: ConclusionTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ConclusionHeader = styled.View`
  align-items: center;
  gap: 8px;
`;

export const Illustration = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  margin: 40px auto 32px auto;
  width: 224px;
  height: 228px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "SUCCESS"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
