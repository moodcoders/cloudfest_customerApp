import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import NumberVerification from '../components/Verification/NumberVerification';

const LoginSignup = () => {
  console.log(Dimensions.get('window'));

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
        <NumberVerification />
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
        <Text style={styles.bottomText}>Already have an account?</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', //need to be removed
  },
  image: {
    height: 126,
    width: 250,
  },
  primaryText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 3,
  },
  secondaryText: {
    color: 'black',
    marginTop: 50,
  },
  thirdText: {
    color: 'blue',
    marginTop: 3,
  },
  handymanImg: {
    marginTop: 10,
    height: 126,
    width: 112,
  },
  borderContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  border: {
    width: '40%',
    borderBottomWidth: 1,
  },
  borderText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  borderDown: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'normal',
  },
  socialIcon: {
    marginTop: 15,
  },
  bottomText: {
    marginTop: 10,
  },
});
