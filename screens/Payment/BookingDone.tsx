import { Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text } from "../../components/Themed";

interface BookingInterface {
    navigation: any,
};

/**
 * Alerts the user when booking is done.
 *
 * @param navigation - object that contains react-navigation methods
 * 
 * @returns JSX.Element
 *
 */

const BookingDone = ({ navigation }: BookingInterface) => {
    return (
        <View style={styles.bookingPage}>
            <Icon
                name='user'
                onPress={() => console.log('back button press')}
                color='#36475A'
                style={{ fontSize: 35, alignSelf: 'flex-end', margin: "5%" }}
            />
            <Text style={styles.bookingText}><Image source={require('../../pictures/mobile.jpg')} />
                Booking {'\n'}                Confirmed !
            </Text>
            <Image source={require('../../pictures/ty.jpg')} />
            <Text style={styles.thanksText}> Thank you for Booking.
                <Text style={{ color: 'black' }}> {'\n'}Your Booking Number is bg6789p0</Text>
            </Text>
            <View style={styles.Bbutton}>
                <TouchableOpacity>
                    <Button title='Back to Home Page' onPress={() => navigation.navigate("PayPage")} />
                </TouchableOpacity>
            </View>
            <View style={styles.Bbutton}>
                <TouchableOpacity>
                    <Button title='View Booking Details' onPress={() => console.log('booking details')} color='#A89DEC' />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default BookingDone;

const styles = StyleSheet.create({
    bookingPage: {
        alignItems: 'center'
    },
    thanksText: {
        color: '#234C7D',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: "15%",
        padding: "2%"
    },
    bookingText: {
        color: '#234C7D',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: "15%",
    },
    imagePhone: {
        width: 20
    },
    Bbutton: {
        width: '80%',
        height: '10%'
    }
});