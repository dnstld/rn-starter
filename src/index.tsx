import React from 'react';
import { useColorScheme } from 'react-native';

import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';

import { Root } from './routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
