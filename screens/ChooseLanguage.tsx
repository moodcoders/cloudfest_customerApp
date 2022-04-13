import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../components/Themed';
import { Display } from '../constants';
import Colors from '../constants/Colors';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function ChooseLanguage({ navigation }: any) {
  const { t: translate, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  return (
    <View style={[styles.langButtonflex, { justifyContent: 'space-around' }]}>
      <Text style={styles.textStyle}>Choose Your Preffed Language</Text>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        onPress={() => {
          changeLanguage('en');
          navigation.navigate('LoginSignupScreen');
        }}
      >
        <Text style={styles.signinButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        onPress={() => {
          changeLanguage('hindi');
          navigation.navigate('LoginSignupScreen');
        }}
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
