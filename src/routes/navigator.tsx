import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/home';
import { WalletScreen } from '../screens/wallet';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName='Wallet'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Homepage' }} />
        
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: 'Wallet Overview' }}/>
    </Stack.Navigator>
  )
};
