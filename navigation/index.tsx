import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from '../hooks/useCachedResources';
import LoginSignupScreen from '../screens/Authentication/LoginSignupScreen';
import OtpVerification from '../screens/Authentication/OtpVerification';

type StackParamList = {
  LoginSignupScreen: undefined;
  OtpVerification: undefined;
};
const Stack = createStackNavigator<StackParamList>();

const Navigation = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='LoginSignupScreen'
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name='LoginSignupScreen'
              component={LoginSignupScreen}
            />
            <Stack.Screen name='OtpVerification' component={OtpVerification} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default Navigation;
