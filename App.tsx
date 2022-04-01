import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoginSignup from './screens/LoginSignup';
import Otp from './components/Verification/Otp';

type StackParamList = {
  LoginSignup: undefined;
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
        {/* <LoginSignup /> */}
        {/* <StatusBar /> */}
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <Otp /> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='LoginSignup'
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='LoginSignup' component={LoginSignup} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default App;
