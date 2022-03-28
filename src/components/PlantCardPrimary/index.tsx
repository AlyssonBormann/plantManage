import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import { Container, Text } from "./styles";

type User = {
  name: string;
  photo: string;
};

type Props = RectButtonProps & {
  data: User;
};

export function PlantCardPrimary({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text>{data.name}</Text>
    </Container>
  );
}
