import React, { useCallback } from 'react';
import { Alert, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useRem } from 'responsive-native';
import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../../components/IconButton';
import { Text, Title } from '../../components/TextComponents';

import cakeImg from '../../assets/cupcake.png';
import mapImg from '../../assets/map.png';
import businessmanImg from '../../assets/businessman.png';

import {
  Container,
  BackButton,
  Content,
  AvatarBox,
  Avatar,
  Buttons,
  Card,
  BoxImage,
  ImageType,
  CardBody,
} from './styles';

export const Profile: React.FC = () => {
  const { colors } = useTheme();
  const rem = useRem();
  const navigation = useNavigation();

  const number = 'tel:+5581992200371';
  const mail = 'mailto: support@expo.io';

  const handlePressPhone = useCallback(async () => {
    const supported = await Linking.canOpenURL(number);
    if (supported) {
      await Linking.openURL(number);
    } else {
      Alert.alert(`Don't know how to open this URL: ${number}`);
    }
  }, [number]);

  const handlePressMail = useCallback(async () => {
    const supported = await Linking.canOpenURL(mail);
    if (supported) {
      await Linking.openURL(mail);
    } else {
      Alert.alert(`Not Supported: ${mail}`);
    }
  }, [mail]);

  const handleBackToHome = () => navigation.goBack();

  return (
    <Container>
      <BackButton onPress={handleBackToHome}>
        <Ionicons name="chevron-back" size={24} color={colors.secondary} />
      </BackButton>

      <Content>
        <AvatarBox>
          <Avatar source={{ uri: 'https://github.com/daniloffelipe.png' }} />
        </AvatarBox>

        <Buttons>
          <IconButton
            activeOpacity={0.8}
            onPress={handlePressPhone}
            style={{
              marginRight: rem(2),
            }}
            iconFA="phone"
            iconColor={colors.primary}
          />
          <IconButton
            activeOpacity={0.8}
            onPress={handlePressMail}
            iconIO="mail"
            iconColor={colors.secondary}
            color={colors.lightPrimary}
          />
        </Buttons>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>About Me</Title>
          <Text marginBottom="16">
            I am highly perceptive and have razor sharp intuition. This does not
            mean that I know everything, and it does not mean that I am never
            wrong. But my instincts about people, events and situations are
            usually spot-on. It freaked my husband out for the first few years
            we were married.😂 But now he loves to ask for my read on things and
            people. I love to learn new things, and I embrace my inner nerd. 🤓.
          </Text>

          <Title>Birthday</Title>
          <Card>
            <BoxImage>
              <ImageType source={cakeImg} />
            </BoxImage>

            <CardBody>
              <Title color={colors.gray}>24 years old</Title>
              <Text>July 31 1997</Text>
            </CardBody>
          </Card>
          <Title>Location</Title>
          <Card>
            <BoxImage>
              <ImageType source={mapImg} />
            </BoxImage>

            <CardBody>
              <Title color={colors.gray}>Brazil, Recife-PE</Title>
            </CardBody>
          </Card>
          <Title>My Job</Title>
          <Card>
            <BoxImage>
              <ImageType source={businessmanImg} />
            </BoxImage>

            <CardBody>
              <Title color={colors.gray}>Developer</Title>
              <Text>Last 7 years</Text>
            </CardBody>
          </Card>
        </ScrollView>
      </Content>
    </Container>
  );
};
