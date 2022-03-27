import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { format } from "date-fns";

import { ASYNCSTORAGE } from "../constants";
import { PlantDTO } from "../dtos/PlantDTO";
import { StoragePlantDTO } from "../dtos/StoraPlantDTO";

export async function savePlant(plant: PlantDTO): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;
    if (repeat_every === "week") {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil(now.getTime() - nextTime.getTime()) / 100
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Heeeeeey, 🌱",
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    });

    const data = await AsyncStorage.getItem(ASYNCSTORAGE.Plants);
    const oldPlants = data ? (JSON.parse(data) as StoragePlantDTO) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    };

    await AsyncStorage.setItem(
      ASYNCSTORAGE.Plants,
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      })
    );
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function loadPlant(): Promise<PlantDTO[]> {
  try {
    const dataPlants = await AsyncStorage.getItem(ASYNCSTORAGE.Plants);
    const plants = dataPlants
      ? (JSON.parse(dataPlants) as StoragePlantDTO)
      : {};

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.dateTimeNotification),
            "HH:mm"
          ),
        };
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      );

    return plantsSorted;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function removePlant(id: string): Promise<void> {
  try {
    const dataPlants = await AsyncStorage.getItem(ASYNCSTORAGE.Plants);
    const plants = dataPlants
      ? (JSON.parse(dataPlants) as StoragePlantDTO)
      : {};

    await Notifications.cancelScheduledNotificationAsync(
      plants[id].notificationId
    );
    delete plants[id];

    await AsyncStorage.setItem(ASYNCSTORAGE.Plants, JSON.stringify(plants));
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
