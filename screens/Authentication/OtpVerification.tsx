import React, { useEffect, useRef, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import Separator from '../../components/Separator';
import { Display } from '../../constants';
import { generateOtpAPI, validateOtp } from '../../services/otp';

/**
 * OtpVerification Component is verifying the Otp send to the User
 *
 * @param navigation - object that contains react-navigation methods
 *
 * @returns JSX.Element
 */
const OtpVerification = ({ navigation, route }: any) => {
  const { mobileNumber } = route.params;

  const firstInput = useRef<any>(null);
  const secondInput = useRef<any>(null);
  const thirdInput = useRef<any>(null);
  const fourthInput = useRef<any>(null);
  const fifthInput = useRef<any>(null);
  const sixthInput = useRef<any>(null);

  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const resendfun = () => {
    setMinutes(4);
    setSeconds(59);
    generateOtpAPI(mobileNumber);
    console.log('Resending Otp');
  };

  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name='chevron-back-outline'
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      <Text style={styles.content}>
        Enter the OTP number just sent you at{' '}
        <Text style={styles.mobileNumberText}>{mobileNumber}</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 2: text });
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 3: text });
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 4: text });
              text ? fifthInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={fifthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 5: text });
              text ? sixthInput.current.focus() : fourthInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
            ref={sixthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 6: text });
              !text && fifthInput.current.focus();
            }}
          />
        </View>
      </View>
      <View style={styles.resendController}>
        {minutes === 0 && seconds === 0 ? (
          <Text style={styles.resendtext} onPress={resendfun}>
            Resend
          </Text>
        ) : (
          <Text style={styles.resendtimer}>
            Please Wait:{'  '}
            {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => validateOtp(mobileNumber, Object.values(otp).join(''))}
      >
        {console.log(otp)}
        <Text style={styles.signinButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  content: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  mobileNumberText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  otpContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: Colors.DEFAULT_GREEN,
  },

  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  resendController: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: '6%',
    paddingVertical: '5%',
  },
  resendtimer: {
    fontSize: 18,
    color: '#377BA1',
    marginLeft: Display.setWidth(2),
  },
  resendtext: {
    fontSize: 18,
    color: Colors.DEFAULT_GREEN,
    marginLeft: Display.setWidth(2),
  },
  signinButton: {
    backgroundColor: Colors.Button_Blue,
    borderRadius: 8,
    marginHorizontal: '10%',

    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  signinButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    letterSpacing: 0.6,
  },
});
