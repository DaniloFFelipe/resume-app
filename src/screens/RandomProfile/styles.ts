import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { getRem } from '../../utils/rem';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  position: relative;
  justify-content: flex-end;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  position: relative;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.space[32]}px;
  height: ${({ theme }) => theme.space[32]}px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.full}px;

  position: absolute;
  top: ${({ theme }) => theme.space[16] + getStatusBarHeight()}px;
  left: ${({ theme }) => theme.space[16]}px;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;

  border-top-left-radius: 36px;
  border-top-right-radius: 36px;

  background: ${({ theme }) => theme.colors.background};

  padding: 0 ${({ theme }) => theme.space[16]}px;
`;

export const AvatarBox = styled.View`
  height: ${({ theme }) => theme.space[128]}px;
  width: ${({ theme }) => theme.space[128]}px;

  border-radius: ${({ theme }) => theme.radius.full}px;
  background: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  align-self: center;
  margin-top: -${getRem(2.5)}px;
`;

export const Avatar = styled.Image`
  height: ${({ theme }) => theme.space[128] - theme.space[16]}px;
  width: ${({ theme }) => theme.space[128] - theme.space[16]}px;

  border-radius: ${({ theme }) => theme.radius.full}px;
`;

export const Buttons = styled.View`
  width: 100%;

  margin: ${({ theme }) => theme.space[16]}px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: 100%;
  height: ${getRem(6.25)}px;
  background: #f2f2f2;
  padding: ${({ theme }) => theme.space[8]}px;

  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.space[16]}px 0;
  border-radius: ${({ theme }) => theme.radius.base}px;
`;

export const BoxImage = styled.View`
  height: ${getRem(4.6875)}px;
  width: ${getRem(4.6875)}px;

  background: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: ${({ theme }) => theme.radius.base}px;
  margin-right: ${({ theme }) => theme.space[16]}px;

  justify-content: center;
  align-items: center;
`;

export const ImageType = styled.Image`
  width: ${getRem(3.4375)}px;
  height: ${getRem(3.4375)}px;
`;

export const CardBody = styled.View``;
