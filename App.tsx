import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';
import NavigationTwo from './navigation/Navigation';
import useCachedResources from './hooks/useCachedResources';
import HandymanAvailable from './screens/HandymanAvailable';

/**
 * Contains the nescessary parent components and navigation component
 *
 * @returns JSX.Element
 *
 */
const StripeProvider2: any = StripeProvider;

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (isLoadingComplete === false) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ marginTop: 40 }}>
        <StripeProvider2 publishableKey='pk_test_51KPrE7SEciFEVIES9vZLZkFMYtM7tXhFwkT08P75ADMHcRzUUqkmMqbRlpFdnOysKssgplKwOaFng7wYHj90x7RW00OtJ8ZuE5'>
          <NavigationTwo />
        </StripeProvider2>
        {/* <HandymanAvailable /> */}
      </SafeAreaProvider>
    );
  }
};
