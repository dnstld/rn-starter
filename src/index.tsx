import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme
} from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={[styles.highlight, { color: theme.colors.primary }]}>
              RNStarter
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
