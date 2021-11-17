import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[24]}px
    ${({ theme }) => theme.space[16]}px ${({ theme }) => theme.space[32]}px;
`;

export const Images = styled.View`
  margin-top: ${({ theme }) => theme.space[24]}px;
`;
