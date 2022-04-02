import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayPage from '../screens/Payment/PayPage';
import BookingDone from '../screens/Payment/BookingDone';
import StripeCard from '../screens/Payment/StripeCard'


const Stack = createNativeStackNavigator();


const NavigationTwo = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PayPage"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="BookingDone"
                    component={BookingDone}
                />
                <Stack.Screen name="StripeCard" component={StripeCard} />
                <Stack.Screen name="PayPage" component={PayPage} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default NavigationTwo