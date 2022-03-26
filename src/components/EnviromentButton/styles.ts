import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  active?: boolean;
};

export const Container = styled(RectButton)<Props>`
  flex: 1;
  ${({ theme, active }) => css`
    background-color: ${active ? theme.COLORS.green_light : theme.COLORS.shape};
  `};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
`;

export const Text = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.heading};
  ${({ theme, active }) => css`
    color: ${active ? theme.COLORS.green_dark : theme.COLORS.heading};
  `};
`;
