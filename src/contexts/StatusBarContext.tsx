// StatusBarContext.js
import React from "react";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

type StatusBarContextValue = {
  StatusBarStyles: Animated.AnimatedInterpolation<string | number>;
  handleChange: (style: Options) => void;
};

const StatusBarContext = React.createContext<StatusBarContextValue | null>(
  null
);

type Options = "WHITE" | "LIGHT_GREEN" | "LIGHT_RED" | "LIGHT_GRAY";

export const StatusBarProvider = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();
  const currentStatus = new Animated.Value(0);
  // 0 - theme.COLORS.GRAY_100
  // 1 - theme.COLORS.GREEN_LIGHT
  // 2 - theme.COLORS.RED_LIGHT
  // 3 - theme.COLORS.GRAY_300

  const StatusBarStyles = currentStatus.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      theme.COLORS.GRAY_100,
      theme.COLORS.GREEN_LIGHT,
      theme.COLORS.RED_LIGHT,
      theme.COLORS.GRAY_300,
    ],
  });

  const StatusEnum = {
    WHITE: 0,
    LIGHT_GREEN: 1,
    LIGHT_RED: 2,
    LIGHT_GRAY: 3,
  };

  const handleChange = (style: Options) => {
    Animated.timing(currentStatus, {
      toValue: StatusEnum[style],
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <StatusBarContext.Provider value={{ StatusBarStyles, handleChange }}>
      {children}
    </StatusBarContext.Provider>
  );
};

export const useStatusBar = () => React.useContext(StatusBarContext);
