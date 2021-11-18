import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useRem } from 'responsive-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { IconButton } from '../../components/IconButton';
import { Text, Title } from '../../components/TextComponents';

import { randomUserAPi } from '../../services/api';
import { User, UserResponse } from './types';
import { mock } from '../../utils/mock';

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
  LoadingContainer,
} from './styles';
import { format, parseISO } from 'date-fns';

export const RandomProfile: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const { colors } = useTheme();
  const rem = useRem();
  const navigation = useNavigation();

  const handlePressPhone = useCallback(async () => {
    const number = `tel:${user?.phone}`;
    const supported = await Linking.canOpenURL(number);
    if (supported) {
      await Linking.openURL(number);
    } else {
      Alert.alert(`Don't know how to open this URL: ${number}`);
    }
  }, [user?.phone]);

  const handlePressMail = useCallback(async () => {
    const mail = `mailto:${user?.email}`;
    const supported = await Linking.canOpenURL(mail);
    if (supported) {
      await Linking.openURL(mail);
    } else {
      Alert.alert(`Not Supported: ${mail}`);
    }
  }, [user?.email]);

  const handleBackToHome = () => navigation.goBack();

  const load = async () => {
    setLoading;
    const random = Math.floor(Math.random() * 10);

    const { data } = await randomUserAPi.get<UserResponse>(`?nat=us`);

    const userData = data.results[0];

    const formDate = format(parseISO(userData.dob.date), 'MMMM dd yyyy');

    let userToSet: User = {
      ...userData,
      company: mock[random].company,
      about: mock[random].about,
      address: `${data.results[0].location.city}, ${data.results[0].location.state}`,
      workTime: Math.floor(Math.random() * 10),
      formattedDate: formDate,
    };

    setUser(userToSet);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <BackButton onPress={handleBackToHome}>
          <Ionicons name="chevron-back" size={24} color={colors.secondary} />
        </BackButton>
        <ActivityIndicator />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <BackButton onPress={handleBackToHome}>
        <Ionicons name="chevron-back" size={24} color={colors.secondary} />
      </BackButton>

      <Content>
        <AvatarBox>
          <Avatar source={{ uri: user?.picture.large }} />
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
          <Text marginBottom="16">{user?.about}</Text>

          <Title>Birthday</Title>
          <Card>
            <BoxImage>
              <ImageType source={cakeImg} />
            </BoxImage>

            <CardBody>
              <Title color={colors.gray}>{user?.dob.age} years old</Title>
              <Text>{user?.formattedDate}</Text>
            </CardBody>
          </Card>
          <Title>Location</Title>
          <Card>
            <BoxImage>
              <ImageType source={mapImg} />
            </BoxImage>

            <CardBody>
              <Title style={{ maxWidth: rem(17) }} color={colors.gray}>
                {user?.address}
              </Title>
            </CardBody>
          </Card>
          <Title>My Job</Title>
          <Card>
            <BoxImage>
              <ImageType source={businessmanImg} />
            </BoxImage>

            <CardBody>
              <Title color={colors.gray}>{user?.company}</Title>
              <Text>Last {user?.workTime} years</Text>
            </CardBody>
          </Card>
        </ScrollView>
      </Content>
    </Container>
  );
};
