import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

type OptionTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  selected: boolean;
  type: OptionTypeStyleProps;
};

export const Option = styled.TouchableOpacity<Props>`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${({ type, selected, theme }) => css`
    background-color: ${selected
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Circle = styled.View<{ type: OptionTypeStyleProps }>`
  background-color: ${({ type, theme }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;
