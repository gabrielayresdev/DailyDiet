import Header from "@components/Header";
import React from "react";
import { useStatusBar } from "src/contexts/StatusBarContext";
import { useTheme } from "styled-components/native";
import {
  ButtonContainer,
  Circle,
  Container,
  Content,
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealType } from "@customTypes/meal";
import { dateFormat } from "@utils/dateFormat";

const Meal = () => {
  const theme = useTheme();
  const statusBarContext = useStatusBar();

  const route = useRoute();
  const meal = route.params as MealType;

  const navigation = useNavigation();

  React.useEffect(() => {
    statusBarContext.handleChange(meal.onDiet ? "LIGHT_GREEN" : "LIGHT_RED", 0);
  }, [statusBarContext]);
  return (
    <Container onDiet={meal.onDiet}>
      <Header
        title="Refeição"
        color={meal.onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
      />
      <Content>
        <TextGroupContainer>
          <Title>{meal.name}</Title>
          <Paragraph>{meal.description}</Paragraph>
        </TextGroupContainer>
        <TextGroupContainer>
          <Subtitle>Data e hora</Subtitle>
          <Paragraph>{`${dateFormat(new Date(meal.date))} às ${
            meal.hour
          }`}</Paragraph>
        </TextGroupContainer>
        <Status>
          <Circle onDiet={meal.onDiet} />
          <Paragraph>{`${meal.onDiet ? "dentro" : "fora"} da dieta`}</Paragraph>
        </Status>
        <ButtonContainer>
          <Button
            CustomIcon={PencilSimpleLine}
            title="Editar refeição"
            onPress={() => navigation.navigate("editMeal", meal)}
          />
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
