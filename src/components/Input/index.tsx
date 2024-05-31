import React from "react";
import { Container, Error, InputField, InputHeader, Label } from "./styles";
import { Animated, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Controller, RegisterOptions, UseFormReturn } from "react-hook-form";

type Props = TextInputProps & {
  label?: string;
  form: UseFormReturn<any>;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
};

const Input = ({ label, form, name, rules }: Props) => {
  const isFocused = new Animated.Value(0);
  const theme = useTheme();

  const inputRef = React.useRef<string>();
  inputRef.current = form.watch(name, "");

  // Handles with input color change animations
  const handleFocus = () => {
    Animated.timing(isFocused, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handleBlur = () => {
    Animated.timing(isFocused, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const BorderColor = isFocused.interpolate({
    inputRange: [0, 1],
    outputRange:
      inputRef!.current!.trim().length === 0
        ? [theme.COLORS.GRAY_300, theme.COLORS.GRAY_500]
        : [theme.COLORS.GRAY_500, theme.COLORS.GRAY_300],
  });

  //
  return (
    <Container>
      <InputHeader>
        <Label>{label ? label : ""}</Label>
        <Error>
          {form.formState?.errors[name]
            ? `${form.formState?.errors[name]?.message}`
            : ""}
        </Error>
      </InputHeader>
      <Controller
        control={form.control}
        render={({ field: { onChange, value } }) => (
          <InputField
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ borderColor: BorderColor }}
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
          />
        )}
        rules={rules}
        name={name}
      />
    </Container>
  );
};

export default Input;
