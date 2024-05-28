import React from "react";
import { FlatList, View } from "react-native";
import { Container, Title } from "./styles";
import { MealType } from "@customTypes/meal";

type Props = {
  title: string;
  meals: MealType[];
};

const MealList = ({ title, meals }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlatList data={meals} renderItem={() => null} />
    </Container>
  );
};

export default MealList;
