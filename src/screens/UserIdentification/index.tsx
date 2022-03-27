import React, { useState } from "react";
import { Platform, Keyboard, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { ASYNCSTORAGE, SCREENS } from "../../constants";

import {
  Container,
  ContainerKeyboard,
  Content,
  Form,
  Header,
  Emoji,
  Input,
  Title,
  Footer,
} from "./styles";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");

  const navigation = useNavigation();

  async function handleConfirm() {
    if (!name) {
      return Alert.alert("Me diz como chamar você 😢");
    }

    try {
      await AsyncStorage.setItem(ASYNCSTORAGE.User, name);
      navigation.navigate(SCREENS.Confirmation, {
        title: "Prontinho",
        subtitle:
          "Agora vamos começar a cuidar das suas plantinhas com muito cuidado.",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: SCREENS.PlantSelect,
      });
    } catch {
      Alert.alert("Não foi possível salvar seu nome. 😢");
    }
  }

  return (
    <Container>
      <ContainerKeyboard
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? "😄" : "😀"}</Emoji>
                <Title>
                  Como podemos {"\n"}
                  chamar você?
                </Title>
              </Header>

              <Input
                placeholder="Digite um nome"
                isFocused={isFocused}
                isFilled={isFilled}
                onBlur={() => {
                  setIsFocused(false);
                  setIsFilled(!!name);
                }}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onChangeText={(value) => {
                  setIsFilled(!!value);
                  setName(value);
                }}
              />
              <Footer>
                <Button title="Confirmar" onPress={handleConfirm} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </ContainerKeyboard>
    </Container>
  );
}
