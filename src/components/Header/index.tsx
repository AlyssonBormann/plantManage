import React, { useEffect, useState } from "react";
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
      <>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </>
      <Image source={{ uri: "https://github.com/AlyssonBormann.png" }} />
    </Container>
  );
}
