import { getRem } from './../../utils/rem';
import styled from 'styled-components/native';

export type ContainerProps = {
  color?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${getRem(2.25)}px;
  height: ${getRem(2.25)}px;
  background: ${({ theme, color }) => color || theme.colors.button};

  justify-content: center;
  align-items: center;

  position: relative;

  border-radius: ${getRem(0.5)}px;
`;
