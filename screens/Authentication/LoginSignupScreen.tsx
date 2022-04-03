import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import NumberVerification from '../../components/NumberVerification';
import Smartservice from '../../assets/images/smartservice.png';
import HandymanImg from '../../assets/images/handymanImg.png';
import { Display } from '../../constants';
import Colors from '../../constants/Colors';

/**
 *LoginSignupScreen is the authentication page of the App
 *
 * @param navigation - object that contains react-navigation methods
 *
 * @returns JSX Elements
 */
const LoginSignupScreen = ({ navigation }: any) => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <View style={[styles.container, { height: windowHeight }]}>
        <Image style={styles.image} source={Smartservice} />
        <Text style={styles.primaryText}>Smart. Resonable. Trusted</Text>
        <Text style={[styles.primaryText, styles.secondaryText]}>
          Home Services By Our
        </Text>
        <Text
          style={[styles.primaryText, styles.secondaryText, styles.thirdText]}
        >
          Smart Pro
        </Text>
        <Image
          style={(styles.image, styles.handymanImg)}
          source={HandymanImg}
        />

        <NumberVerification navigation={navigation} />

        <View style={styles.borderContainer}>
          <View style={styles.border} />
          <Text style={styles.borderText}>Or</Text>
          <View style={styles.border} />
        </View>
        <Text
          style={[styles.primaryText, styles.secondaryText, styles.borderDown]}
        >
          Sign Up With
        </Text>
        <View style={[styles.borderContainer, styles.socialIcon]}>
          <FontAwesome name='google' size={40} color={Colors.GOOGLE_BLUE} />
          <MaterialIcons
            name='facebook'
            size={40}
            color={Colors.FABEBOOK_BLUE}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: Display.setHeight(16),
    width: Display.setWidth(60),
  },
  primaryText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  secondaryText: {
    color: 'black',
    marginTop: '10%',
  },
  thirdText: {
    color: 'blue',
    marginTop: '3%',
  },
  handymanImg: {
    marginTop: '8%',
    height: Display.setHeight(16),
    width: Display.setWidth(28),
  },
  borderContainer: {
    marginTop: '9%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  border: {
    width: '46%',
    borderBottomWidth: 1,
  },
  borderText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  borderDown: {
    marginTop: '3.5%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  socialIcon: {
    letterSpacing: 200,
    justifyContent: 'space-between',
    marginTop: '6%',
  },
});
