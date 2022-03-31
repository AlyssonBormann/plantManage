import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { formatDistance, getTime } from "date-fns";
import { pt } from "date-fns/locale";

import { PlantDTO } from "../../dtos/PlantDTO";
import { loadPlant, removePlant } from "../../libs/storage";

import { Load } from "../../components/Load";
import waterdrop from "../../assets/waterdrop.png";
import { Header } from "../../components/Header";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";

import {
  Container,
  Spotlight,
  SpotlighImage,
  SpotlightText,
  Plants,
  PlantsTitle,
} from "./styles";

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

  function handleRemove(plant: PlantDTO) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch {
            Alert.alert("Não foi possível remover! 🥲");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlighImage source={waterdrop} />
        <SpotlightText>{nextWaterd}</SpotlightText>
      </Spotlight>
      <Plants>
        <PlantsTitle>Próxima regadas</PlantsTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
        />
      </Plants>
    </Container>
  );
}
