import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Form = styled.View`
  flex: 1;
  gap: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 40px 24px;
`;

export const FormRow = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const SelectTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 8px;
`;
