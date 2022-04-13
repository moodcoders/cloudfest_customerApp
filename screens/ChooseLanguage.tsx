import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../components/Themed';
import { Display } from '../constants';
import Colors from '../constants/Colors';
export default function ChooseLanguage() {
  return (
    <View style={[styles.langButtonflex, { justifyContent: 'space-around' }]}>
      <Text style={styles.textStyle}>Choose Your Preffed Language</Text>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        // onPress={onPressCheck}
      >
        <Text style={styles.signinButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        // onPress={onPressCheck}
      >
        <Text style={styles.signinButtonText}>हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  langButtonflex: {
    height: Display.setHeight(100),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinButton: {
    backgroundColor: Colors.Button_Blue,
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
