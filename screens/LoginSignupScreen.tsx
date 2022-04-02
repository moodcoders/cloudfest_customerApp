import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import NumberVerification from '../components/Verification/NumberVerification';
import { Display } from '../utils';
const LoginSignupScreen = () => {
  // const Dimension = Dimensions.get('screen');
  // console.log(Display.setHeight);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/smartservice.png')}
        />
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
          source={require('../assets/images/handymanImg.png')}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          // style={styles.container}
        >
          <NumberVerification />
        </KeyboardAvoidingView>

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
          <FontAwesome name='google' size={34} color='black' />
          <MaterialIcons name='facebook' size={34} color='blue' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 126,
    width: 250,
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
    height: 126,
    width: 112,
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
    marginTop: '3%',
    fontSize: 15,
    fontWeight: 'normal',
  },
  socialIcon: {
    marginTop: '3%',
  },
});
