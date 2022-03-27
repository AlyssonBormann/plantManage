export type PlantDTO = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  enviroments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
  hour: string;
  dateTimeNotification: Date;
};
