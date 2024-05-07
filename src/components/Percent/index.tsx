import React from "react";
import { Container, IconContainer, Subtitle } from "./styles";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";
import AnimatedNumber from "@components/AnimatedNumber";

type Props = {
  oldValue: number;
  newValue: number;
};

const Percent = ({ oldValue, newValue }: Props) => {
  const status = React.useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const [percent, setPercent] = React.useState(oldValue);
  let x = 0;

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
    let interval: NodeJS.Timeout;
    function percentAnimate() {
      const increment = newValue / 100;

      interval = setInterval(() => {
        console.log(percent);
        if (percent >= newValue) {
          clearInterval(interval);
          setPercent(newValue);
        } else {
          setPercent((current) => current + increment);
        }
      }, Math.random() * 25);
    }

    handleChange();
    /* percentAnimate(); */
    return () => {
      clearInterval(interval);
    };
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
      {/* <Title>{`${percent}%`}</Title> */}
      <AnimatedNumber oldValue={oldValue} newValue={newValue} />
      <Subtitle>{`das refeições ${
        newValue > 50 ? "dentro" : "fora"
      } da dieta`}</Subtitle>
    </Container>
  );
};

export default Percent;
