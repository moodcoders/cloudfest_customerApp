import { StatusBar, ActivityIndicator } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { View, Text } from './components/Themed';

import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import { AuthContext } from './constants/Context';

/**
 * Contains the nescessary parent components and navigation component
 *
 * @returns JSX.Element
 *
 */
const StripeProvider2: any = StripeProvider;

export default function App() {
  const { authContext, ...authState } = useCachedResources();
  {
    console.log(authState);
  }
  const colorScheme = useColorScheme();

  if (authState.isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#35B2E6' />
        <Text>Loading.....</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor='transparent'
      />
      <StripeProvider2 publishableKey='pk_test_51KPrE7SEciFEVIES9vZLZkFMYtM7tXhFwkT08P75ADMHcRzUUqkmMqbRlpFdnOysKssgplKwOaFng7wYHj90x7RW00OtJ8ZuE5'>
        <AuthContext.Provider value={{ authContext, authState }}>
          <Navigation colorScheme={colorScheme} />
        </AuthContext.Provider>
        {/* <NavigationTwo /> */}
      </StripeProvider2>
    </>
  );
}
