import Icon from 'react-native-vector-icons/AntDesign';
import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const mobileImage = require('../../pictures/mobile.jpg');
const thankYouImage = require('../../pictures/ty.jpg');
import { Text, View } from '../../components/Themed';
import { Display } from '../../constants';
import Colors from '../../constants/Colors';

interface BookingInterface {
  navigation: any;
}

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
      {/* <Icon
        name='user'
        onPress={() => console.log('back button press')}
        color='#36475A'
        style={{ fontSize: 35, alignSelf: 'flex-end', margin: '5%' }}
      /> */}
      <Text style={styles.bookingText}>
        <Image source={mobileImage} />
        Booking {'\n'} Confirmed !
      </Text>
      <Image source={thankYouImage} />
      <Text style={styles.thanksText}>
        {' '}
        Thank you for Booking.
        <Text style={{ color: 'black' }}>
          {' '}
          {'\n'}Your Booking Number is bg6789p0
        </Text>
      </Text>
      <View style={styles.Backbutton}>
        <TouchableOpacity>
          <Button
            title='Back to Home Page'
            onPress={() => navigation.navigate('Root')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Backbutton}>
        <TouchableOpacity>
          <Button
            title='View Booking Details'
            onPress={() => navigation.navigate('BookingDetails')}
            color='#A89DEC'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDone;

const styles = StyleSheet.create({
  bookingPage: {
    backgroundColor: Colors.DEFAULT_WHITE,
    marginTop: Display.setHeight(5),
    alignItems: 'center',
  },
  thanksText: {
    color: '#234C7D',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '15%',
    padding: '2%',
  },
  bookingText: {
    color: '#234C7D',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: '15%',
  },
  imagePhone: {
    width: 20,
  },
  Backbutton: {
    width: '80%',
    height: '10%',
  },
});
