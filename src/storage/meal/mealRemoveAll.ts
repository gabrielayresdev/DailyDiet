import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemoveAll() {
  try {
    const storage = await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([])
    );
    return storage;
  } catch (error) {
    throw error;
  }
}
