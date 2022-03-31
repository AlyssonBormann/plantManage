import React from "react";
import { Animated, View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Title,
  Details,
  TimeLabel,
  Time,
  ButtonRemove,
} from "./styles";

type Props = RectButtonProps & {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
};

export function PlantCardSecondary({ data, ...rest }: Props) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove>
              <Feather name="trash" size={32} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Container>
    </Swipeable>
  );
}
