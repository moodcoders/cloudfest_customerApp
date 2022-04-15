import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../constants/Context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable, } from 'react-native';

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import ModalScreen from '../screens/ModalScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';
import HomePage from '../screens/HomePage';
import ServicePage from '../screens/ServicePage';
import HandymanAvailable from '../screens/HandymanAvailable';
import MyBooking from '../screens/MyBooking';
import BookingDetails from '../screens/BookingDetails';
import UserProfileView from '../screens/UserProfile';
import useCachedResources from '../hooks/useCachedResources';

// import Settings from '../screens/Settings';


import LoginSignupScreen from '../screens/Authentication/LoginSignupScreen';
import OtpVerification from '../screens/Authentication/OtpVerification';
import OauthVerification from '../screens/Authentication/OauthVerification';
import ChooseLanguage from '../screens/ChooseLanguage';
import Settings from '../screens/Settings';

interface ctx {
  authState: object;
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { authState } = useContext<ctx | any>(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName='ChooseLanguage'
      screenOptions={{
        headerShown: false,
      }}
    >
      {authState.currentLanguage === null ? (
        <Stack.Screen name='ChooseLanguage' component={ChooseLanguage} />
      ) : null}
      {authState.userToken === null ? (
        <>
          <Stack.Screen
            name='LoginSignupScreen'
            component={LoginSignupScreen}
          />
          <Stack.Screen name='OtpVerification' component={OtpVerification} />
          <Stack.Screen
            name='OauthVerification'
            component={OauthVerification}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name='Root'
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HandymanAvailable'
            component={HandymanAvailable}
          />
          <Stack.Screen name='BookingDetails' component={BookingDetails} />
          <Stack.Screen name='Settings' component={Settings} />
          <Stack.Screen
            name='NotFound'
            component={NotFoundScreen}
            options={{ title: 'Oops!' }}
          />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='Modal' component={ModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomePage}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <MaterialIcons
                name='home'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name='Booking'
        component={MyBooking}
        options={{
          title: 'Booking',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='handyman' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='ServicePage'
        component={ServicePage}
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='miscellaneous-services' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={UserProfileView}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='account-circle' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}
