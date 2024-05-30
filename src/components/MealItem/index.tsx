import { MealType } from "@customTypes/meal";
import React from "react";
import { Container, Hour, Separator, Status, Title } from "./styles";

type Props = {
  meal: MealType;
};

const MealItem = ({ meal }: Props) => {
  return (
    <Container>
      <Hour>{meal.hour.length > 0 ? meal.hour : "22:00"}</Hour>
      <Separator />
      <Title>{meal.name}</Title>
      <Status onDiet={meal.onDiet} />
    </Container>
  );
};

export default MealItem;
