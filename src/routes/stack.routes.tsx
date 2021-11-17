import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Tabs } from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export const Stack: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      animation: 'fade',
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Profiles" component={Tabs} />
  </Navigator>
);
