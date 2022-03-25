import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components";

import { SCREENS } from "../../constants";
import wateringImg from "../../assets/watering.png";
import { Container, Wrapper, Title, SubTitle, Image, Button } from "./styles";

export function Welcome() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate(SCREENS.UserIdentification);
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Title>
        <Image source={wateringImg} resizeMode="contain" />
        <SubTitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </SubTitle>
        <Button onPress={handleStart}>
          <Feather
            name="chevron-right"
            size={32}
            style={{ color: COLORS.white }}
          />
        </Button>
      </Wrapper>
    </Container>
  );
}
