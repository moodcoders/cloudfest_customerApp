import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';

import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import MyBooking from './screens/MyBooking';


/**
 * Contains the nescessary parent components and navigation component
 *
 * @returns JSX.Element
 *
 */
const StripeProvider2: any = StripeProvider;

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (isLoadingComplete === false) {
    return null;
  } else {
    return (
      <SafeAreaView>
        {/* <StripeProvider2 publishableKey='pk_test_51KPrE7SEciFEVIES9vZLZkFMYtM7tXhFwkT08P75ADMHcRzUUqkmMqbRlpFdnOysKssgplKwOaFng7wYHj90x7RW00OtJ8ZuE5'>
          <Navigation colorScheme={colorScheme} />
          <NavigationTwo />
        </StripeProvider2> */}
        <MyBooking />
      </SafeAreaView>
    );
  }
}
