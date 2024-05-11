import React from "react";
import { Title } from "./styles";

type Props = {
  oldValue: number;
  newValue: number;
};

const AnimatedNumber = ({ oldValue, newValue }: Props) => {
  const [currentNumber, setCurrentNumber] = React.useState(oldValue);

  React.useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 3000;
    const difference = newValue - oldValue;

    const updateNumber = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const percentage = 1 - remaining / 300;
      const newNumber = oldValue + Math.floor(percentage * difference);
      setCurrentNumber(newNumber);

      if (newNumber !== newValue) {
        requestAnimationFrame(updateNumber);
      }
    };

    updateNumber();
  }, [oldValue, newValue]);

  return <Title>{currentNumber}</Title>;
};

export default AnimatedNumber;
