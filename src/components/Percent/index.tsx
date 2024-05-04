import React from "react";
import { Container, IconContainer, Subtitle, Title } from "./styles";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

type Props = {
  oldValue: number;
  newValue: number;
};

const Percent = ({ oldValue, newValue }: Props) => {
  const status = React.useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const [percent, setPercent] = React.useState(oldValue);
  let x = 0;

  function percentAnimate() {
    const increment = newValue / 100;

    const incrementInterval = setInterval(() => {
      if (percent >= newValue) {
        console.log("maior");
        clearInterval(incrementInterval);
        setPercent(newValue);
      } else {
        setPercent((current) => current + increment);
      }
    }, Math.random() * 25);
  }

  function handleChange() {
    Animated.timing(status, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  function getBackgroundColor(value: number) {
    if (value > 50) {
      return theme.COLORS.GREEN_LIGHT;
    } else {
      return theme.COLORS.RED_LIGHT;
    }
  }

  const bgColor = status.interpolate({
    inputRange: [0, 1],
    outputRange: [getBackgroundColor(oldValue), getBackgroundColor(newValue)],
  });

  React.useEffect(() => {
    handleChange();
    percentAnimate();
    x = x + 1;
    console.log(x);
  }, []);

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <IconContainer>
        <ArrowUpRight
          size={24}
          color={
            newValue > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
          }
        ></ArrowUpRight>
      </IconContainer>
      <Title>{`${percent}%`}</Title>
      <Subtitle>{`das refeições ${
        newValue > 50 ? "dentro" : "fora"
      } da dieta`}</Subtitle>
    </Container>
  );
};

export default Percent;
