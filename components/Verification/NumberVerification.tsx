import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NumberVerification: React.FC = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <View style={styles.container}>
        {showMessage && (
          <View style={styles.message}>
            <Text>Value: {value}</Text>
            <Text>Formatted Value: {formattedValue}</Text>
            <Text>Valid: {valid ? 'true' : 'false'}</Text>
          </View>
        )}
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode='IN'
          layout='first'
          onChangeText={(text) => {
            setFormattedValue(text);
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          //   withDarkTheme
          withShadow
          //   autoFocus
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}
        >
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NumberVerification;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    marginTop: 10,
    height: 50,
    // width: 300,
  },
  wrapper: {},
  message: {},
  button: {},
});
