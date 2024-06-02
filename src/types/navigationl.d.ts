import { MealType } from "./meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      addMeal: undefined;
      editMeal: MealType;
      conclusion: {
        type: "SUCCESS" | "FAILURE";
      };
    }
  }
}
