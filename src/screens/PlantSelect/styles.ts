import { FlatListProps, FlatList } from "react-native";
import styled from "styled-components/native";
import { EnviromentProps } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const HeaderContainer = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.heading};
  font-family: ${({ theme }) => theme.FONTS.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.text};
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.heading};
`;

export const EnviromentList = styled(
  FlatList as new (
    props: FlatListProps<EnviromentProps>
  ) => FlatList<EnviromentProps>
)`
  height: 45px;
  padding-bottom: 5px;
  margin-left: 32px;
  margin: 32px 0;
  padding-right: 32px;
  padding: 0 10px;
`;

export const Plants = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`;
