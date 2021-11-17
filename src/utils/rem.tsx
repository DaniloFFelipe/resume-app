import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';

import { ScreenProvider, rem } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const baseWith =
  Dimensions.get('screen').width <= 300
    ? 14
    : Dimensions.get('screen').width <= 400
    ? 15
    : 16;

const basePixelRadio =
  PixelRatio.get() <= 1.5 ? 14 : PixelRatio.get() <= 2 ? 15 : 16;

export const RemProvider: React.FC = ({ children }) => (
  <SafeAreaProvider>
    <ScreenProvider baseFontSize={basePixelRadio}>{children}</ScreenProvider>
  </SafeAreaProvider>
);

export const getRem = (size: number, shouldScale: boolean = false) =>
  rem({
    size,
    shouldScale,
  });
