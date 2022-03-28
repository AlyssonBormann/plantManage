import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.heading};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.text};
  text-align: center;
  font-size: 17px;
  padding: 10px 0;
  color: ${({ theme }) => theme.COLORS.heading};
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
