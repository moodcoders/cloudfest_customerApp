import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import BookingDone from '../screens/Payment/BookingDone';
import PayPage from '../screens/Payment/PayPage';
import StripeCard from '../screens/Payment/StripeCard';


const Stack = createNativeStackNavigator();

/**
 * all the components are routed through this, it uses @react-navigation library
 *
 * @returns JSX.Element
 */
const NavigationTwo = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="BookingDone" component={BookingDone} />
                <Stack.Screen name="StripeCard" component={StripeCard} />
                <Stack.Screen name="PayPage" component={PayPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default NavigationTwo;