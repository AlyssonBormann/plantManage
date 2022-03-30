import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const Spotlight = styled.View`
  background-color: ${({ theme }) => theme.COLORS.blue_light};
  padding-left: 20px;
  padding-right: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlighImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.blue};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.COLORS.heading};
  color: ${({ theme }) => theme.COLORS.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`;
