import React, { useEffect, useState } from "react";
import { format, isBefore } from "date-fns";
import { Alert } from "react-native";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { Platform } from "react-native";
import { SvgFromUri } from "react-native-svg";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import { useNavigation, useRoute } from "@react-navigation/native";

import { savePlant } from "../../libs/storage";

import waterdrop from "../../assets/waterdrop.png";
import { Button } from "../../components/Button";

import { PlantDTO } from "../../dtos/PlantDTO";

import {
  Container,
  ScrollListContainer,
  PlantInfo,
  Controller,
  PlantName,
  PlantAbout,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
} from "./styles";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SCREENS } from "../../constants";

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == "ios");

  const route = useRoute();
  const plant = route.params as PlantDTO;

  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! ⏰");
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate(SCREENS.Confirmation, {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
        buttonTitle: "Muito Obrigado :D",
        icon: "hug",
        nextScreen: "MyPlants",
      });
    } catch {
      Alert.alert("Não foi possível salvar. 😢");
    }
  }

  return (
    <ScrollListContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollListContainer}
    >
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} height={150} width={150} />

          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>

        <Controller style={styles.controller}>
          <TipContainer>
            <TipImage source={waterdrop} />
            <TipText style={styles.tipText}>{plant.water_tips}</TipText>
          </TipContainer>

          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === "android" && (
            <DateTimePickerButton onPress={handleOpenDatetimePickerForAndroid}>
              <DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button title="Cadastrar planta" onPress={handleSave} />
        </Controller>
      </Container>
    </ScrollListContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollListContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  controller: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  plantName: {
    fontSize: 24,

    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",

    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,

    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",

    fontSize: 12,
    marginBottom: 5,
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
  },
  dateTimePickerText: {
    fontSize: 24,
  },
});
