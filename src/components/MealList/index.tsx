import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Container, Title } from "./styles";
import { MealType } from "@customTypes/meal";
import MealItem from "@components/MealItem";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  meals: MealType[];
};

const MealList = ({ title, meals }: Props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>{title}</Title>
      <FlatList
        style={{ gap: 8 }}
        data={meals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("meal", {
                meal: item,
              })
            }
          >
            <MealItem meal={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default MealList;
