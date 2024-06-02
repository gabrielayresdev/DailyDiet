import Header from "@components/Header";
import React from "react";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";
import { Alert } from "react-native";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import MealForm from "@components/MealForm";
import { v4 as uuidv4 } from "uuid";

type Data = {
  name: string;
  description: string;
  date: string;
  hour: string;
};

const AddMeal = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);

  const [option, setOption] = React.useState<boolean | null>(null);
  const navigation = useNavigation();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
    },
  });

  const required = {
    required: "Campo obrigatório",
  };

  async function onSubmit({ name, description, date, hour }: Data) {
    try {
      if (option !== null) {
        const meal = {
          id: uuidv4(),
          name,
          description,
          date: new Date(date.split("/").reverse().join("-")).toString(),
          hour,
          onDiet: option,
        };
        await mealCreate(meal);
        const meals = await mealGetAll();
        console.log(meals);
        navigation.navigate("home");
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
  }

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

export default AddMeal;
