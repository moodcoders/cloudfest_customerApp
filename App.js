//import { StatusBar } from 'expo-status-bar';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import BookingDone from './screens/Payment/BookingDone';
//import Navigation from './navigation';
import PayPage from './screens/Payment/PayPage';
import StripeCard from './screens/Payment/StripeCard'


export default function App() {

  const [ stripeTab, setStripeTab] = useState( false )
  const [ bookingDone, setBookingDone ] = useState(false)

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView >
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StatusBar /> */}
        <StripeProvider publishableKey='pk_test_51KPrE7SEciFEVIES9vZLZkFMYtM7tXhFwkT08P75ADMHcRzUUqkmMqbRlpFdnOysKssgplKwOaFng7wYHj90x7RW00OtJ8ZuE5'>
            {  bookingDone ? <BookingDone setBookingDone={setBookingDone}/> : stripeTab ?  <StripeCard setStripeTab={setStripeTab} setBookingDone={setBookingDone}/> :<PayPage setStripeTab={setStripeTab} setBookingDone={setBookingDone}/> }
        </StripeProvider>
      </SafeAreaView>
    );
  }
}
