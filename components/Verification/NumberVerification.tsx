import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Display } from '../../constants';

const NumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumberFlag, setValidNumberFlag] = useState<Boolean>(false);

  function validatePhoneNumber(number: string): Boolean {
    const regexp = new RegExp('^[0-9]{1,10}$');
    return regexp.test(number);
  }

  function onChangeHandler(text: string) {
    // console.log(text);
    let res = validatePhoneNumber(text);
    setValidNumberFlag(res);
    setPhoneNumber(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.inputsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.countryListContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/india.png')}
            />
            <Text style={styles.countryCodeText}>{'+91'}</Text>
          </TouchableOpacity>
          <View style={styles.phoneInputContainer}>
            <TextInput
              maxLength={10}
              placeholder="Phone Number"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType="number-pad"
              style={styles.inputText}
              // value={inputNumber}
              onChangeText={onChangeHandler}
            />
          </View>
        </View>
        <Text style={styles.verificationText}>
          {phoneNumber.length !== 0
            ? isValidNumberFlag
              ? ''
              : 'Invalid'
            : null}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.signinButton, { alignSelf: 'center' }]}
        activeOpacity={0.8}
        // onPress={() => navigation.navigate('Verification', { phoneNumber })}
      >
        <Text style={styles.signinButtonText}>Contiue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberVerification;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  inputsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: '5%',
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 5,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  image: {
    height: 35,
    width: 30,
    borderRadius: 50,
  },
  countryCodeText: {
    fontSize: 16,
    color: Colors.DEFAULT_BLACK,
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    borderColor: Colors.LIGHT_GREY2,
    width: '70%',
    height: '100%',
  },
  inputText: {
    fontSize: 18,
    height: Display.setHeight(6),
    marginLeft: 10,

    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
  verificationText: {
    color: 'red',
    fontWeight: 'bold',
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    height: Display.setHeight(6),
    width: Display.setWidth(50),

    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
});
