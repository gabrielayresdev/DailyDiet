import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import {
  ButtonContainer,
  Form,
  FormContainer,
  FormRow,
  SelectTitle,
} from "./styles";
import Input from "@components/Input";
import { UseFormReturn } from "react-hook-form";
import Select from "@components/Select";
import Button from "@components/Button";

type Props = {
  form: UseFormReturn<any>;
  option: boolean | null;
  setOption: React.Dispatch<React.SetStateAction<boolean | null>>;
  onSubmit: (data: any) => void;
};

const MealForm = ({ form, option, setOption, onSubmit }: Props) => {
  const required = {
    required: "Campo obrigatório",
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Form>
          <Input form={form} name="name" label="Nome" rules={required} />
          <Input
            form={form}
            name="description"
            label="Descrição"
            numberOfLines={4}
            rules={required}
          />
          <FormRow>
            <FormContainer>
              <Input form={form} name="date" label="Data" rules={required} />
            </FormContainer>
            <FormContainer>
              <Input form={form} name="hour" label="Hora" rules={required} />
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
  );
};

export default MealForm;
