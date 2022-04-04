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
// /**
//  * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
//  * https://reactnavigation.org/docs/getting-started
//  *
//  */
// import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
// } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as React from 'react';
// import { ColorSchemeName, Pressable, SafeAreaView } from 'react-native';

// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
// import ModalScreen from '../screens/ModalScreen';
// import NotFoundScreen from '../screens/NotFoundScreen';
// import ServicePage from '../screens/ServicePage';
// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
// import {
//   RootStackParamList,
//   RootTabParamList,
//   RootTabScreenProps,
// } from '../types';
// import LinkingConfiguration from './LinkingConfiguration';
// import HomePage from '../screens/HomePage';

// export default function Navigation({
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
//     >
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// /**
//  * A root stack navigator is often used for displaying modals on top of all other content.
//  * https://reactnavigation.org/docs/modal
//  */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name='Root'
//         component={BottomTabNavigator}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name='NotFound'
//         component={NotFoundScreen}
//         options={{ title: 'Oops!' }}
//       />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name='Modal' component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

// /**
//  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
//  * https://reactnavigation.org/docs/bottom-tab-navigator
//  */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName='TabOne'
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}
//     >
//       <BottomTab.Screen
//         name='TabOne'
//         component={TabOneScreen}
//         options={{
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
//         }}
//       />

//       <BottomTab.Screen
//         name='TabTwo'
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
