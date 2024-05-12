export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      addMeal: undefined;
      conclusion: {
        type: "SUCCESS" | "FAILURE";
      };
      meal: {
        id: string;
      };
    }
  }
}
