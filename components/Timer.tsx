import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Display } from '../constants';
import { generateOtpAPI } from '../services/otp';

interface timerProp {
  mobileNumber: string;
}
/**
 * Timer Component is used for displaying the timer
 *
 * @param mobileNumber
 *
 * @returns JSX Elements
 */
const Timer = ({ mobileNumber }: timerProp) => {
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
    console.log('Resending');
  };

  return (
    <View>
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
  );
};
export default Timer;

const styles = StyleSheet.create({
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
});
