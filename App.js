import { StripeProvider } from '@stripe/stripe-react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';

import NavigationTwo from './navigation/Navigation';


export default function App() {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ marginTop: 40 }}>
        <StripeProvider publishableKey='pk_test_51KPrE7SEciFEVIES9vZLZkFMYtM7tXhFwkT08P75ADMHcRzUUqkmMqbRlpFdnOysKssgplKwOaFng7wYHj90x7RW00OtJ8ZuE5'>
          <NavigationTwo />
        </StripeProvider>
      </SafeAreaProvider>
    );
  }
}
