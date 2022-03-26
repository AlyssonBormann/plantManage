import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  width: 200px;
  height: 200px;
  background: transparent;
`;
