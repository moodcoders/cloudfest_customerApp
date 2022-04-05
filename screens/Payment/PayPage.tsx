import Icons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";

import PayCard from "./PayCard";
import { Text, View } from "../../components/Themed";
import HomePage from '../HomePage';

/**
 * Displayes The card components for payment and the total payment information
 * 
 * @param navigation - object that contains react-navigation methods
 * 
 * @returns JSX.Element
 */
const PayPage = ({ navigation }: any) => {
    return (
        <>
            <Text style={styles.payHeading}>
                <Text style={{ fontWeight: 'bold' }}>SMART</Text>
                SERVICES
            </Text>
            <Icons
                name='chevron-back-circle'
                onPress={() => navigation.navigate("HomePage")}
                color='#BBD0FA'
                style={{ fontSize: 35, margin: 10, marginBottom: 0 }}
            />
            <Text style={styles.payment}>
                Make Payment
            </Text>
            <View style={styles.payContainer}>
                <PayCard icon='cc-mastercard' name='Credit Card' color='#FF5E02' page='StripeCard' navigation={navigation} />
                <PayCard icon='google' name='Google Pay' color='#4285F4' navigation={navigation} page='BookingDone' />
                <PayCard icon='inr' name='UPI' color='#599BD8' navigation={navigation} page='BookingDone' />
                <PayCard icon='money' name='Cash' color='#65CF53' page='BookingDone' navigation={navigation} />
                <View style={styles.paymentSlip}>
                    <Text style={styles.slipHeading}> Charge Details</Text>
                    <Text style={styles.Servicecharge}> Service Charge                  Rs. 200</Text>
                    <Text style={styles.amount}> Amount Payable                Rs. 200</Text>
                </View>
            </View>
        </>
    )
};

export default PayPage;

const styles = StyleSheet.create({
    payHeading: {
        color: '#234C7D',
        textAlign: 'center',
        fontSize: 22,
        borderBottomColor: '#E7EBED',
        borderBottomWidth: 1,
    },
    payContainer: {
        backgroundColor: '#F9FBFF',
        height: 1000,
        alignItems: 'center',

    },
    payment: {
        color: '#234C7D',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15
    },
    paymentSlip: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: '95%',
        padding: 13,
        borderColor: '#E7EBED',
        borderWidth: 2.5,
        borderTopWidth: 0,
        margin: 15,
    },
    amount: {
        fontSize: 20,
        color: 'black',
        fontStyle: 'normal',
        padding: 3
    },
    Servicecharge: {
        fontSize: 20,
        color: 'black',
        padding: 3
    },
    slipHeading: {
        fontSize: 20,
        color: '#B1A3A3',
        padding: 5,
        borderBottomColor: '#E7EBED',
        borderBottomWidth: 2,
    }
});