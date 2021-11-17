import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRem } from 'responsive-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import Logo from '../../assets/logo.svg';
import Landing from '../../assets/landing.svg';

import { Container, Images } from './styles';

export const Home: React.FC = () => {
  const rem = useRem();
  const theme = useTheme();

  const navigation = useNavigation();

  const handleNext = () => navigation.navigate('Profiles' as never);

  return (
    <Container>
      <Images>
        <Logo />

        <Landing width={rem(22)} />
      </Images>

      <Button
        title="Show me"
        textColor={theme.colors.white}
        onPress={handleNext}
        icon={
          <Feather
            name="arrow-right"
            size={rem(1.25)}
            color={theme.colors.white}
          />
        }
      />
    </Container>
  );
};
