import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import MealForm from "@components/MealForm";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealType } from "@customTypes/meal";
import { useTheme } from "styled-components";
import { useStatusBar } from "src/contexts/StatusBarContext";
import { useForm } from "react-hook-form";
import { mealUpdate } from "@storage/meal/mealUpdate";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { Alert } from "react-native";

type Data = {
  name: string;
  description: string;
  date: string;
  hour: string;
};

const EditMeal = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);

  const route = useRoute();
  const meal = route.params as MealType;
  console.log(meal);

  const navigation = useNavigation();

  const form = useForm({
    defaultValues: {
      name: meal.name,
      description: meal.description,
      date: meal.date,
      hour: meal.hour,
    },
  });

  const onSubmit = async ({ name, description, date, hour }: Data) => {
    try {
      if (option !== null) {
        const data = {
          id: meal.id,
          name,
          description,
          date: new Date(date.split("/").reverse().join("-")).toString(),
          hour,
          onDiet: option,
        };
        await mealUpdate(data);
        const meals = await mealGetAll();
        console.log(meals);
        navigation.navigate("meal", data);
      } else {
        throw new Error(
          "Por favor, nos diga se a sua refeição está dentro da dieta"
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("New Meal", error.message);
      } else {
        Alert.alert(
          "New Meal",
          "Não foi possível adicionar uma nova refeição."
        );
      }
    }
  };

  const [option, setOption] = React.useState<boolean | null>(meal.onDiet);

  return (
    <Container>
      <Header title="Nova refeição" color={theme.COLORS.GRAY_300} />
      <MealForm
        form={form}
        option={option}
        setOption={setOption}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default EditMeal;
