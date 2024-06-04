import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealType } from "@customTypes/meal";

export async function mealRemove(meal: MealType) {
  try {
    const stored = await mealGetAll();
    const index = stored.findIndex((meal) => meal.id === meal.id);
    const storage = stored.filter((item) => item.id !== meal.id);
    return await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
