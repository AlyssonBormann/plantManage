import React, { useState } from "react";
import { Platform, Keyboard, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Button } from "../../components/Button";

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

  async function handleConfirm() {
    if (!name) {
      return Alert.alert("Me diz como chamar você 😢");
    }

    try {
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
