import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumberVerification from '../components/Verification/NumberVerification';

const LoginSignup = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 101,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    // paddingTop: 150,
    // alignItems: 'center',
    // justifyContent: 'center',
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
});
