import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { Container, ContainerProps } from './styles';
import { useTheme } from 'styled-components/native';
import { getRem } from '../../utils/rem';

type Props = TouchableOpacityProps &
  ContainerProps & {
    iconFA?: React.ComponentProps<typeof FontAwesome>['name'];
    iconIO?: React.ComponentProps<typeof Ionicons>['name'];
    iconColor?: string;
    iconSize?: number;
  };

export const IconButton: React.FC<Props> = ({
  iconFA,
  iconIO,
  iconColor,
  iconSize,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Container {...props}>
      {iconFA && (
        <FontAwesome
          name={iconFA}
          color={iconColor || colors.secondary}
          size={iconSize || getRem(1.25)}
        />
      )}
      {iconIO && (
        <Ionicons
          name={iconIO}
          color={iconColor || colors.secondary}
          size={iconSize || getRem(1.25)}
        />
      )}
    </Container>
  );
};
