import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Text } from "./styles";

type Props = RectButtonProps & {
  title: string;
  active?: boolean;
};

export function EnviromentButton({ title, active = false, ...rest }: Props) {
  return (
    <Container {...rest} active={active}>
      <Text active={active}>{title}</Text>
    </Container>
  );
}
