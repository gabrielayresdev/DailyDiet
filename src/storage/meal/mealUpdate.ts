import { MealType } from "@customTypes/meal";
import { mealGetAll } from "./mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealUpdate(data: MealType) {
  try {
    const { id } = data;
    const stored = await mealGetAll();
    const index = stored.findIndex((meal) => meal.id === id);
    stored[index] = data;
    const storage = JSON.stringify(stored);
    return await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
