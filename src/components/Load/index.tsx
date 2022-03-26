import React from "react";
import loadAnimation from "../../assets/load.json";

import { Container, Animation } from "./styles";

export function Load() {
  return (
    <Container>
      <Animation autoPlay loop source={loadAnimation} />
    </Container>
  );
}
