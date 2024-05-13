import Header from "@components/Header";
import React from "react";
import {
  ButtonContainer,
  Container,
  Form,
  FormRow,
  SelectTitle,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";
import Input from "@components/Input";
import { Alert, View } from "react-native";
import Select from "@components/Select";
import Button from "@components/Button";
import { mealCreate } from "@storage/meal/mealCreate";
import { MealType } from "@customTypes/meal";
import { mealGetAll } from "@storage/meal/mealGetAll";

const AddMeal = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [option, setOption] = React.useState<0 | 1 | null>(null);

  async function handleNewMeal() {
    try {
      if (option !== null) {
        const meal = {
          name,
          description,
          date,
          hour,
          onDiet: option === 1,
        };
        await mealCreate(meal);
        const meals = await mealGetAll();
        console.log(meals);
      }
    } catch (error) {
      Alert.alert("New Meal", "Não foi possível adicionar uma nova refeição.");
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" color={theme.COLORS.GRAY_300} />
      <Form>
        <Input value={name} setValue={setName} label="Nome" />
        <Input
          value={description}
          setValue={setDescription}
          label="Descrição"
          numberOfLines={4}
        />
        <FormRow>
          <Input value={date} setValue={setDate} label="Data" />
          <Input value={hour} setValue={setHour} label="Hora" />
        </FormRow>
        <View>
          <SelectTitle>Está dentro da dieta?</SelectTitle>
          <Select option={option} setOption={setOption} />
        </View>
        <ButtonContainer>
          <Button title="Cadastrar refeição" onPress={handleNewMeal} />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddMeal;
