import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import Meal from "@screens/Meal";
import Conclusion from "@screens/Conclusion";
import AddMeal from "@screens/AddMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="addMeal" component={AddMeal} />
      <Screen name="meal" component={Meal} />
      <Screen name="conclusion" component={Conclusion} />
    </Navigator>
  );
}
