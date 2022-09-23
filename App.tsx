/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
  </NavigationContainer>
  );
};

export default App;
