import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border: 40px;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.heading};
  font-family: ${({ theme }) => theme.FONTS.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.heading};
  font-family: ${({ theme }) => theme.FONTS.heading};
  line-height: 40px;
`;
