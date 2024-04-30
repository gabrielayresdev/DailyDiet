import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import Button from "@components/Button";
import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine";
import Select, { Options } from "@components/Select";
import React from "react";
import Input from "@components/Input";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  const [option, setOption] = React.useState<Options>(null);
  const [value, setValue] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Button
            title="Label"
            CustomIcon={PencilSimpleLine}
            type="SECONDARY"
          />
          <Button title="Label" CustomIcon={PencilSimpleLine} type="PRIMARY" />
          <Select option={option} setOption={setOption} />
          <Input value={value} setValue={setValue} />
          <StatusBar style="auto" />
        </View>
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 16,
  },
});
