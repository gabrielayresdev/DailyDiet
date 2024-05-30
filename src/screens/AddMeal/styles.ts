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

  position: relative;
`;

export const FormRow = styled.View`
  width: 100%;
  flex-direction: row;
  flex-shrink: 1;
  gap: 20px;
`;

export const FormContainer = styled.View`
  flex: 1;
`;

export const SelectTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
`;
