import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { EnviromentButton } from "../../components/EnviromentButton";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { Header } from "../../components/Header";

import { SCREENS } from "../../constants";
import { PlantDTO } from "../../dtos/PlantDTO";

import api from "../../services/api";

import {
  Container,
  HeaderContainer,
  Title,
  Subtitle,
  EnviromentList,
  Plants,
} from "./styles";

export type EnviromentProps = {
  key: string;
  title: string;
};

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantDTO[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState<PlantDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment);

    if (enviroment === "all") {
      return setFilteredPlants(plants);

      const filtered = plants.filter((plant) =>
        plant.enviroments.includes(enviroment)
      );

      setFilteredPlants(filtered);
    }
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    if (!data) {
      return setLoading(true);
    }
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage((olValue) => olValue + 1);
    fetchPlants();
  }

  function handlePlantSelecte(plant: PlantDTO) {
    navigation.navigate(SCREENS.PlantSave, plant);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );

      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>Você quer colocar sua planta?</Subtitle>
      </HeaderContainer>
      <>
        <EnviromentList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={enviroments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
        />
      </>
      <>
        <Plants>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              handleFetchMore(distanceFromEnd)
            }
            ListFooterComponent={
              loading ? <ActivityIndicator color={COLORS.green} /> : <></>
            }
            data={filteredPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardPrimary
                data={item}
                onPress={() => handlePlantSelecte(item)}
              />
            )}
          />
        </Plants>
      </>
    </Container>
  );
}
