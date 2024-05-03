import React from "react";
import { Animated, TouchableWithoutFeedback, ViewProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { Icon, IconContext } from "phosphor-react-native/src/lib/";
import { useTheme } from "styled-components/native";

type Props = ViewProps & {
  CustomIcon?: Icon;
  title: string;
  type?: ButtonTypeStyleProps;
  fill?: boolean;
  handlePress?: () => void;
};

const Button = ({
  CustomIcon,
  title,
  type = "PRIMARY",
  handlePress,
  fill = true,
  ...rest
}: Props) => {
  const theme = useTheme();

  // Deals with animations
  const isPressed = new Animated.Value(0);
  function handlePressIn() {
    Animated.timing(isPressed, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }
  function handlePressOut() {
    Animated.timing(isPressed, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }
  const buttonColor = isPressed.interpolate({
    inputRange: [0, 1],
    outputRange:
      type === "PRIMARY"
        ? [theme.COLORS.GRAY_600, theme.COLORS.GRAY_700]
        : [theme.COLORS.GRAY_100, theme.COLORS.GRAY_300],
  });
  //
  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Container style={{ backgroundColor: buttonColor }} fill={fill} {...rest}>
        {CustomIcon && (
          <IconContext.Provider
            value={{
              color:
                type === "PRIMARY"
                  ? theme.COLORS.GRAY_100
                  : theme.COLORS.GRAY_700,
              size: 18,
            }}
          >
            <CustomIcon />
          </IconContext.Provider>
        )}
        <Title type={type}>{title}</Title>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Button;
