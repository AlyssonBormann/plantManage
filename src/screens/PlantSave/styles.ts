import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const ScrollListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 0 30px;
  padding: 50px 0;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.shape};
`;

export const Controller = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const PlantName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.heading};
  color: ${({ theme }) => theme.COLORS.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.COLORS.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.complement};
  color: ${({ theme }) => theme.COLORS.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DateTimePickerText = styled.Text`
  color: ${({ theme }) => theme.COLORS.heading};
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.text};
`;
