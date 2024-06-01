import { MealType } from "./meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      addMeal: {
        meal?: MealType;
      };
      conclusion: {
        type: "SUCCESS" | "FAILURE";
      };
    }
  }
}
