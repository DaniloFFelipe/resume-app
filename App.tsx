import React from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { RemProvider } from './src/utils/rem';
import { Routes } from './src/routes';

import theme from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    semibold: Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RemProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </ThemeProvider>
    </RemProvider>
  );
};

export default App;
