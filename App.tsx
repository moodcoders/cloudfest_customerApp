import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoginSignupScreen from './screens/LoginSignupScreen';
import OtpVerification from './components/Verification/OtpVerification';
import NumberVerification from './components/Verification/NumberVerification';

type StackParamList = {
  LoginSignupScreen: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <LoginSignupScreen />
        {/* <StatusBar /> */}
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <OtpVerification
          params={{
            phoneNumber: undefined,
          }}
        /> */}
        {/* <NumberVerification /> */}
        {/* <NavigationContainer>
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
          </Stack.Navigator>
        </NavigationContainer> */}
      </SafeAreaProvider>
    );
  }
};

export default App;
