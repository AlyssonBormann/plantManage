import { PlantDTO } from "./PlantDTO";

export type StoragePlantDTO = {
  [id: string]: {
    data: PlantDTO;
    notificationId: string;
  };
};
