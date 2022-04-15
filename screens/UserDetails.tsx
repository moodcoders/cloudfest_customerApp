import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { View, Text } from '../components/Themed';
import Dropdown from '../components/dropdown';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Toggle from '../components/ToggleSwitch';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import CustomDatePicker from '../components/Calender';
import { SafeAreaView } from 'react-native-safe-area-context';

const getLocation = async () => {
  if (Platform.OS === 'android' && !Constants.isDevice) {
    throw new Error('Oops, this will not work.');
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied');
  }
  return await Location.getCurrentPositionAsync({});
};

const UserDetails = () => {
  const [mobileNumber, setmobileNumber] = useState('');
  const [isValidNumberFlag, setValidNumberFlag] = useState<Boolean>(false);
  const [userLocation, setuserLocation] = useState<Location.LocationObject>();

  function validatemobileNumber(number: string): Boolean {
    const regexp = new RegExp('^[0-9]{0,10}$');
    return regexp.test(number);
  }

  function onChangeHandler(text: string) {
    let res = validatemobileNumber(text);
    setValidNumberFlag(res);
    if (res === true) {
      setmobileNumber(text);
    }
  }
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const handleValidEmail = (val: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('Enter email');
    } else if (reg.test(val) === false) {
      setEmailValidError('Enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>
        SMART<Text style={styles.service}> SERVICE</Text>
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(0,0,0,0.22)"
      />
      <View style={{ padding: 10 }}>
        <View style={styles.title}>
          <AntDesign name="user" size={30} color="black" />
          <Text style={styles.title}>User Details</Text>
        </View>
        <View style={styles.rectangle2}>
          <View style={styles.rectangle3}>
            <TextInput placeholder="Name" style={styles.inputContainer} />
          </View>
          <View style={styles.rectangle3}>
            <TextInput
              style={styles.inputContainer}
              placeholder="Email"
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => {
                setEmail(value);
                handleValidEmail(value);
              }}
            />
            {emailValidError ? <Text>{emailValidError}</Text> : null}
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.rectangle4}>
              <Text style={{ alignSelf: 'center', marginTop: 12 }}>+91</Text>
            </View>
            <View style={[styles.rectangle3, { width: 217.5 }]}>
              <TextInput
                maxLength={10}
                placeholder="Phone Number"
                keyboardType="number-pad"
                onChangeText={onChangeHandler}
                style={styles.inputContainer}
                value={mobileNumber}
              />
            </View>
          </View>

          <View
            style={[
              styles.rectangle3,
              {
                alignItems: 'center',
                padding: 12.5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              },
            ]}
          >
            <Text>Date of Birth</Text>
            <CustomDatePicker
              defaultDate="1985-01-01"
              onDateChange={(value: string) => console.log(value)}
            />
          </View>

          <View style={styles.rectangle3}>
            <Dropdown />
          </View>
          <View style={styles.rectangle3}>
            <TextInput placeholder="Address" style={styles.inputContainer} />
          </View>
          <Text style={[styles.title, { marginTop: '5%' }]}>OR</Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent',
              marginLeft: '20%',
              alignItems: 'center',
            }}
          >
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={{ fontSize: 18 }}>Set Location</Text>
            <Toggle
              onClick={async () => {
                const location = await getLocation();
                setuserLocation(location);
                console.log(location);
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.serviceBtn}>
            <Text style={styles.btnName}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234C7D',
    textAlign: 'center',
  },
  service: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#234C7D',
  },
  inputContainer: {
    margin: 7,
    color: '#90AAC9',
  },
  serviceBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#35B2E6',
    width: '35%',
    marginTop: 15,
  },
  btnName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  rectangle2: {
    backgroundColor: '#E7F2FF',
    borderRadius: 12,
    alignSelf: 'center',
    padding: 10,
  },
  rectangle3: {
    height: 44.12,
    width: 300,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 12,
  },
  rectangle4: {
    height: 44.12,
    width: 70,
    backgroundColor: '#FFFFFF',
    marginTop: 15,

    borderRadius: 12,
  },
  separator: {
    marginVertical: 3,
    height: 1.5,
    width: '90%',
    alignSelf: 'center',
  },
});

export default UserDetails;
