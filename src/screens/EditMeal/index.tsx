import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import MealForm from "@components/MealForm";
import { useRoute } from "@react-navigation/native";
import { MealType } from "@customTypes/meal";
import { useTheme } from "styled-components";
import { useStatusBar } from "src/contexts/StatusBarContext";
import { useForm } from "react-hook-form";

const EditMeal = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);

  const route = useRoute();
  const { meal } = route.params as MealType;

  const form = useForm({
    defaultValues: {
      name: meal.name,
      description: meal.description,
      date: meal.date,
      hour: meal.hour,
    },
  });

  const onSubmit = async () => {
    try {
      console.log(form.getValues());
    } catch (error) {
      console.log(error);
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
