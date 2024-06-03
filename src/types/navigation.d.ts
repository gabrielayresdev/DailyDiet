import { MealType } from "./meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      addMeal: undefined;
      meal: MealType;
      editMeal: MealType;
      conclusion: {
        type: "SUCCESS" | "FAILURE";
      };
    }
  }
}
