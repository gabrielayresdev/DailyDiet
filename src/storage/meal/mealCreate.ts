import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealType } from "../../types/meal";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealCreate(newMeal: MealType) {
  try {
    const storedMeal = await mealGetAll();

    const storage = JSON.stringify([...storedMeal, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
