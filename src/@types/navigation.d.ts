import { PlantDTO } from "../dtos/PlantDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      UserIdentification: undefined;
      PlantSave: PlantDTO;
      Confirmation: {};
      PlantSelect: undefined;
    }
  }
}
