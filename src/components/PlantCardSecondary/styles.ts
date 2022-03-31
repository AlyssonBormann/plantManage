import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.shape};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.COLORS.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.COLORS.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
  width: 100%;
  height: 85px;
  background-color: ${({ theme }) => theme.COLORS.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;
