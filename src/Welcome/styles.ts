import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.heading};
  margin-top: 38px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  line-height: 34px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.COLORS.heading};
  margin-top: 38px;
  font-family: ${({ theme }) => theme.FONTS.text};
`;
export const Image = styled.Image`
  height: ${Dimensions.get("window").width * 0.7}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.COLORS.green};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
  border-radius: 16px;
`;
