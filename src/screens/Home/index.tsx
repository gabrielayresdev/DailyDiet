import React from "react";
import { Container, MealHeader, Meals, Title } from "./styles";
import Percent from "@components/Percent";
import Button from "@components/Button";
import Plus from "phosphor-react-native/src/icons/Plus";
import { FlatList } from "react-native";
import { MealType } from "@customTypes/meal";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { mealRemoveAll } from "@storage/meal/mealRemoveAll";
import { dateFormat } from "@utils/dateFormat";
import MealList from "@components/MealList";

export type MealGrouped = { [key: string]: MealType[] };

const Home = () => {
  const [meals, setMeals] = React.useState<MealGrouped | null>(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      async function getMeals() {
        const storage = await mealGetAll();
        setMeals(() => {
          const groupedMeals = storage.reduce<MealGrouped>((groups, meal) => {
            const date = new Date(meal.date);
            const formatedDate = dateFormat(date);
            if (!groups[formatedDate]) {
              groups[formatedDate] = [];
            }
            groups[formatedDate].push(meal);
            return groups;
          }, {});
          console.log(groupedMeals);
          return groupedMeals;
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

        {meals && (
          <FlatList
            data={Object.keys(meals)}
            renderItem={({ item }) => (
              <MealList key={item} title={item} meals={meals[item]} />
            )}
          />
        )}
      </Meals>
    </Container>
  );
};

export default Home;
