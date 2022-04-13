// import all the components we are going to use
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from '../components/Themed';

import handymanIcon from '../assets/images/handyman.png';
import ServicesList from '../components/ServicesList';
import HandymanList from '../components/HandymanList';
import Separator from '../components/Separator';
import Colors from '../constants/Colors';

const HomePage = ({ navigation }: any) => {
  const { t: translate } = useTranslation();
  return (
    <View>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View>
        <Text style={styles.title}>
          {' '}
          {translate('Smart')}
          <Text style={styles.service}> {translate('Services')}</Text>
        </Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(0, 0, 0, 0.22)'
        />
      </View>
      <ScrollView>
        <View
          style={styles.homePadding}
          lightColor='#fff'
          darkColor='rgba(0, 0, 0, 0.22)'
        >
          <Text style={styles.ClintName}> {translate('hi')}! Md Ghazanfar</Text>
          <Text style={styles.subTitle}>
            {translate('What service do')}
            {'\n'}
            {translate('you need?')}
          </Text>
          <TouchableOpacity
            style={styles.serviceBtn}
            onPress={() => navigation.navigate('ServicePage')}
          >
            <Text style={styles.btnName}>{translate('Get Started')}</Text>
          </TouchableOpacity>
          <Image source={handymanIcon} style={styles.serviceImage} />
          <Text style={styles.listName}>{translate('Category')}</Text>
          <ServicesList />
          <Text style={styles.listName}>{translate('Recommended')}</Text>
          <HandymanList />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#234c7d',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  service: {
    color: '#335580',
    fontWeight: 'normal',
  },
  separator: {
    height: 1.5,
    width: '80%',
    alignSelf: 'center',
    color: '#335580',
  },
  homePadding: {
    padding: 15,
  },
  ClintName: {
    fontSize: 20,
    color: '#335580',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subTitle: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  serviceImage: {
    alignSelf: 'flex-end',
    marginTop: -100,
  },
  serviceBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#c9dafa',
    width: '50%',
    marginTop: 15,
  },
  btnName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listName: {
    fontSize: 25,
    color: '#335580',
    fontWeight: 'bold',
  },
  lang: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#c9dafa',
    width: '18%',
  },
});

export default HomePage;
