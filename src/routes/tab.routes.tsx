import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Profile } from '../screens/Profile';
import { RandomProfile } from '../screens/RandomProfile';

const { Navigator, Screen } = createBottomTabNavigator();

export const Tabs: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="RandomProfile"
        component={RandomProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="random" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
