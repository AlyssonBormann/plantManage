import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { Container, Content, Title, Subtitle, Emoji, Footer } from "./styles";

const emojis = {
  hug: "🤗",
  smile: "😄",
};

type Params = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
};

export function Confirmation() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { title, subtitle, buttonTitle, icon, nextScreen } =
    route.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}
