import React from "react";
import { Container, InputField, Label } from "./styles";
import { Animated, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, value, setValue, ...rest }: Props) => {
  const isFocused = new Animated.Value(0);
  const theme = useTheme();

  // Handles with input color change animations
  const handleFocus = () => {
    console.log("Focado");
    Animated.timing(isFocused, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handleBlur = () => {
    console.log("Não Focado");
    Animated.timing(isFocused, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const BorderColor = isFocused.interpolate({
    inputRange: [0, 1],
    outputRange:
      value.trim().length === 0
        ? [theme.COLORS.GRAY_300, theme.COLORS.GRAY_500]
        : [theme.COLORS.GRAY_500, theme.COLORS.GRAY_300],
  });
  //
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputField
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ borderColor: BorderColor }}
        value={value}
        onChangeText={setValue}
      />
    </Container>
  );
};

export default Input;
