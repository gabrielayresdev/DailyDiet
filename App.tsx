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

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

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
  },
});
