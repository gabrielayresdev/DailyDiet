import React from "react";
import { Container, MealHeader, Meals, Title } from "./styles";
import Percent from "@components/Percent";
import Button from "@components/Button";
import Plus from "phosphor-react-native/src/icons/Plus";
import { FlatList, Text } from "react-native";
import { MealType } from "@customTypes/meal";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { mealRemoveAll } from "@storage/meal/mealRemoveAll";

const Home = () => {
  const [meals, setMeals] = React.useState<MealType[] | null>(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      async function getMeals() {
        const storage = await mealGetAll();
        setMeals(() => {
          const order = storage.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          console.log(order);
          return order;
        });
      }
      getMeals();
    }, [])
  );
  return (
    <Container>
      <Percent oldValue={65} newValue={75} />
      <Meals>
        <MealHeader>
          <Title>Refeições</Title>
          <Button
            title="Nova refeição"
            CustomIcon={Plus}
            onPress={() => navigation.navigate("addMeal")}
          />
        </MealHeader>

        <FlatList
          data={meals}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </Meals>
    </Container>
  );
};

export default Home;
