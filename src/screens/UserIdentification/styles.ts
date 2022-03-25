import styled, { css } from "styled-components/native";

type InputProps = {
  isFocused: boolean;
  isFilled: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.gray};
  color: ${({ theme }) => theme.COLORS.heading};
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  ${({ theme, isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      border-color: ${theme.COLORS.green};
    `}
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.green};
  font-family: ${({ theme }) => theme.FONTS.heading};
  margin-top: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
