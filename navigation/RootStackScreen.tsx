import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignupScreen from '../screens/Authentication/LoginSignupScreen';
import OtpVerification from '../screens/Authentication/OtpVerification';
import ChooseLanguage from '../screens/ChooseLanguage';
import OauthVerification from '../screens/Authentication/OauthVerification';

const Stack = createNativeStackNavigator();

/**
 * RootStackScreen is Handling Navigation for Auth Screen
 */
const RootStackScreen = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ChooseLanguage' component={ChooseLanguage} />
      <Stack.Screen name='LoginSignupScreen' component={LoginSignupScreen} />
      <Stack.Screen name='OtpVerification' component={OtpVerification} />
      <Stack.Screen name='OauthVerification' component={OauthVerification} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
