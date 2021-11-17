import React, { ReactComponentElement, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, ContainerProps, Icon, Title } from './styles';

type Props = TouchableOpacityProps &
  ContainerProps & {
    icon?: ReactElement;
    title: string;
    textColor?: string;
    textSize?: number;
    textFamily?: 'regular' | 'medium' | 'semibold';
  };

export const Button: React.FC<Props> = ({
  title,
  icon,
  textColor,
  textSize,
  textFamily,
  ...props
}) => {
  return (
    <Container {...props}>
      <Title color={textColor} size={textSize} family={textFamily}>
        {title}
      </Title>

      {!!icon && <Icon>{icon}</Icon>}
    </Container>
  );
};
