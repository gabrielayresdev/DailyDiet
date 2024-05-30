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

const AddMeal = () => {
  const theme = useTheme();
  const context = useStatusBar();
  context?.handleChange("LIGHT_GRAY", 0);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [option, setOption] = React.useState<0 | 1 | null>(null);
  const navigation = useNavigation();

  async function handleNewMeal() {
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
      }
    } catch (error) {
      Alert.alert("New Meal", "Não foi possível adicionar uma nova refeição.");
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" color={theme.COLORS.GRAY_300} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Form>
            <Input value={name} setValue={setName} label="Nome" />
            <Input
              value={description}
              setValue={setDescription}
              label="Descrição"
              numberOfLines={4}
            />
            <FormRow>
              <FormContainer>
                <Input value={hour} setValue={setHour} label="Hora" />
              </FormContainer>
              <FormContainer>
                <Input value={date} setValue={setDate} label="Data" />
              </FormContainer>
            </FormRow>
            <View>
              <SelectTitle>Está dentro da dieta?</SelectTitle>
              <Select option={option} setOption={setOption} />
            </View>

            <ButtonContainer>
              <Button title="Cadastrar refeição" onPress={handleNewMeal} />
            </ButtonContainer>
          </Form>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );

  return (
    <Container>
      <Header title="Nova refeição" color={theme.COLORS.GRAY_300} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
      </KeyboardAvoidingView>
    </Container>
  );
};

export default AddMeal;
