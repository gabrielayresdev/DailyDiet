import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Options } from "@components/Select";
import React from "react";
import AnimatedStatusBar from "@components/AnimatedStatusBar";
import { StatusBarProvider } from "src/contexts/StatusBarContext";
import Conclusion from "@screens/Conclusion";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  /* const [option, setOption] = React.useState<Options>(null);
  const [value, setValue] = React.useState(""); */

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && (
        <StatusBarProvider>
          <Conclusion />
          <AnimatedStatusBar />
        </StatusBarProvider>
      )}
    </ThemeProvider>
  );
}
