import Header from "@components/Header";
import React from "react";
import {
  ButtonContainer,
  Container,
  Form,
  FormContainer,
  FormRow,
  SelectTitle,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useStatusBar } from "src/contexts/StatusBarContext";
import Input from "@components/Input";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import Select from "@components/Select";
import Button from "@components/Button";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { useNavigation } from "@react-navigation/native";
import { mealRemoveAll } from "@storage/meal/mealRemoveAll";
import { useForm } from "react-hook-form";

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

  const [option, setOption] = React.useState<0 | 1 | null>(null);
  const navigation = useNavigation();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
    },
  });

  async function onSubmit({ name, description, date, hour }: Data) {
    try {
      if (option !== null) {
        const meal = {
          name,
          description,
          date: new Date(date.split("/").reverse().join("-")).toString(),
          hour,
          onDiet: option === 1,
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Form>
            <Input form={form} name="name" label="Nome" />
            <Input
              form={form}
              name="description"
              label="Descrição"
              numberOfLines={4}
            />
            <FormRow>
              <FormContainer>
                <Input form={form} name="date" label="Data" />
              </FormContainer>
              <FormContainer>
                <Input form={form} name="hour" label="Hora" />
              </FormContainer>
            </FormRow>
            <View>
              <SelectTitle>Está dentro da dieta?</SelectTitle>
              <Select option={option} setOption={setOption} />
            </View>

            <ButtonContainer>
              <Button
                title="Cadastrar refeição"
                onPress={form.handleSubmit(onSubmit)}
              />
            </ButtonContainer>
          </Form>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

export default AddMeal;
