import { useEffect, useMemo, useReducer, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import '../i18n';
import { useTranslation } from 'react-i18next';


interface authType {
  isLoadingComplete: boolean,
  userToken: null | string
  currentLanguage: null | string
}

/**
 * useCachedResources is a hook which is handling SIGNIN SIGNUP and storing the token of a User
 */
export default function useCachedResources() {
  const { t: translate, i18n } = useTranslation();
  const initialAuthState: authType = {
    userToken: null,
    isLoadingComplete: true,
    currentLanguage: null
  }

  const authReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoadingComplete: false,
          currentLanguage: action.lang
        }
      case 'CHANGELANG':
        return {
          ...prevState,
          isLoadingComplete: false,
          currentLanguage: action.lang
        }
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoadingComplete: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoadingComplete: false,
          currentLanguage: null
        }
      default:
        throw new Error();
    }
  }
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  //This method is using cached value and not allowing the function to build from scratch on every render
  const authContext = useMemo(
    () => ({
      changeLanguage: async (value: string) => {
        try {
          i18n
            .changeLanguage(value)
          await AsyncStorage.setItem('lang', value);
        }
        catch (e) {
          console.log(e)
        }
        dispatch({ type: 'CHANGELANG', lang: value })
      },
      signIn: async (userToken: string) => {
        try {
          await SecureStore.setItemAsync('token', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', token: userToken })
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('lang')
          await SecureStore.deleteItemAsync('token')
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' })
      },
    }),
    [],
  );

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    setTimeout(async () => {
      async function loadResourcesAndDataAsync() {

        try {
          SplashScreen.preventAutoHideAsync();

          // Load fonts
          await Font.loadAsync({
            ...FontAwesome.font,
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          }
          );
          try {
            let token: null | string = null;
            let lang: null | string = null;
            token = await SecureStore.getItemAsync('token')
            lang = await AsyncStorage.getItem('lang')
            dispatch({ type: 'RETRIEVE_TOKEN', token: token, lang: lang })
            try {
              if (lang) {
                i18n
                  .changeLanguage(lang)
              }
            }
            catch (e) {
              console.log(e)
            }
          } catch (e) {
            console.log(e)
          }
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          SplashScreen.hideAsync();
        }
      }
      loadResourcesAndDataAsync();
    }, 1000)
  }, []);

  return {
    ...authState, authContext
  };
}
