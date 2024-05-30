import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 14px 16px 14px 12px;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Separator = styled.View`
  height: 100%;
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    flex: 1;
  `}
`;

export const Status = styled.View<{ onDiet: boolean }>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_MEDIUM : theme.COLORS.RED_MEDIUM};

  border-radius: 7px;
  overflow: hidden;
`;
