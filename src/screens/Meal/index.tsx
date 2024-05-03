import Header from "@components/Header";
import React from "react";
import { useStatusBar } from "src/contexts/StatusBarContext";
import { useTheme } from "styled-components/native";
import {
  ButtonContainer,
  Circle,
  Container,
  Content,
  MealTypeStyleProps,
  Paragraph,
  Status,
  Subtitle,
  TextGroupContainer,
  Title,
} from "./styles";
import Button from "@components/Button"; /* 
import PencilSimpleLine  from "phosphor-react-native/"; */

import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine";
import Trash from "phosphor-react-native/src/icons/Trash";

const Meal = () => {
  const theme = useTheme();
  const type: MealTypeStyleProps = "SUCCESS";
  const statusBarContext = useStatusBar();

  React.useEffect(() => {
    statusBarContext.handleChange(
      type === "SUCCESS" ? "LIGHT_GREEN" : "LIGHT_RED",
      0
    );
  }, [statusBarContext]);
  return (
    <Container type={type}>
      <Header
        title="Refeição"
        color={
          type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
      />
      <Content>
        <TextGroupContainer>
          <Title>Sanduíche</Title>
          <Paragraph>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Paragraph>
        </TextGroupContainer>
        <TextGroupContainer>
          <Subtitle>Data e hora</Subtitle>
          <Paragraph>12/08/2022 às 16:00</Paragraph>
        </TextGroupContainer>
        <Status>
          <Circle type={type} />
          <Paragraph>{`${
            type === "SUCCESS" ? "dentro" : "fora"
          } da dieta`}</Paragraph>
        </Status>
        <ButtonContainer>
          <Button CustomIcon={PencilSimpleLine} title="Editar refeição" />
          <Button
            CustomIcon={Trash}
            title="Excluir refeição"
            type="SECONDARY"
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Meal;
