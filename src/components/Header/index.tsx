import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ASYNCSTORAGE } from "../../constants";

import { Container, Image, Greeting, UserName } from "./styles";

export function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem(ASYNCSTORAGE.User);
      setUserName(user || "");
    }
    loadStorageUserName();
  }, []);
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </View>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/11725888?v=4" }}
      />
    </Container>
  );
}
