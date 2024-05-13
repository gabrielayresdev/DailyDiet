import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType } from "@customTypes/meal";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealType[] = storage ? await JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
