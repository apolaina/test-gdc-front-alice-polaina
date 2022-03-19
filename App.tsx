import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Home from './views/Home';
import { colors, ThemeProvider } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export const theme = {
  colors: {
    ...colors,
    primary: '#802254',
    success: '#48B57E',
    error: '#B94A48',
    greyOutline: '#D4D9E2',
    grey4: '#F9F9F9',
    grey5: '#F2F2F2',
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hello :)" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
