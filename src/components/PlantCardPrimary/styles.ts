import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${({ theme }) => theme.COLORS.shape};
  border-radius: 20px;
  padding: 0 10px;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.green_dark};
  font-family: ${({ theme }) => theme.FONTS.heading};
  margin: 0 16px;
`;
