import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Separator from '../Separator';
import { Display } from '../../utils';

const OtpVerification = () => {
  const firstInput = useRef<any>(null);
  const secondInput = useRef<any>(null);
  const thirdInput = useRef<any>(null);
  const fourthInput = useRef<any>(null);
  const fifthInput = useRef<any>(null);
  const sixthInput = useRef<any>(null);

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
        <Text style={styles.phoneNumberText}>phoneNumber</Text>
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
    // fontFamily: Fonts.POPPINS_MEDIUM,
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  otpContainer: {
    // marginHorizontal: 20,
    // marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderBottomWidth: 1,
    // borderRadius: 5,
    // borderColor: Colors.DEFAULT_GREEN,
    // borderWidth: 0.7,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
