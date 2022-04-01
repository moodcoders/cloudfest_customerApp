// import React, { useState, useRef } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Otp from './Otp';

// const NumberVerification = () => {
//   const [value, setValue] = useState('');
//   const [otpPage, setOtpPage] = useState(false);
//   const [formattedValue, setFormattedValue] = useState('');
//   const phoneInput = useRef<PhoneInput>(null);

//   //Method to show Otp page
//   const showOtpPage = () => {
//     setOtpPage(!otpPage);
//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <PhoneInput
//           ref={phoneInput}
//           defaultValue={value}
//           defaultCode='IN'
//           layout='first'
//           onChangeText={(text) => {
//             setValue(text);
//           }}
//           onChangeFormattedText={(text) => {
//             setFormattedValue(text);
//           }}
//           countryPickerProps={{ withAlphaFilter: true }}
//           withShadow
//           autoFocus
//         />

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             showOtpPage();
//             console.log(otpPage);
//           }}
//         >
//           <Text style={styles.buttonText}>Login / Signup</Text>
//         </TouchableOpacity>
//         {otpPage ? alert('<Otp />') : null}
//       </View>
//     </>
//   );
// };

// export default NumberVerification;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   button: {
//     marginTop: 20,
//     height: 50,
//     width: 320,
//     borderRadius: 9.49,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#35B2E6',
//     shadowColor: 'rgba(0,0,0,0.4)',
//     shadowOffset: {
//       width: 1,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 24,
//   },
//   message: {
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 20,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

const NumberVerification = () => {
  return (
    <View>
      <Text>NumberVerification</Text>
    </View>
  );
};

export default NumberVerification;
