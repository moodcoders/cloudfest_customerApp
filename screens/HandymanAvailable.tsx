import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import EletricianIcon from '../assets/images/electricianIcon.png';

import HandymanDetail from '../components/HandymanDetails';
import { SafeAreaView } from 'react-native-safe-area-context';

const HandymanAvailable = ({ navigation, route }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>
          {' '}
          SMART<Text style={styles.service}> SERVICES</Text>
        </Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(0, 0, 0, 0.22)'
        />
      </View>
      <ScrollView>
        <View style={styles.homePadding}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
            }}
          >
            <TouchableOpacity>
              <Icon
                name='chevron-left'
                onPress={() => navigation.navigate('HomeApplicances' as any, {service: route.params.service, img: route.params.img} )} //TODO: new updated routing
                color='#fff'
                style={{
                  fontSize: 35,
                  backgroundColor: '#bbd0fa',
                  borderRadius: 5,
                  width: 30,
                }}
              />
            </TouchableOpacity>
            <Icon
              name='user'
              onPress={() => console.log('profile button press')}
              color='#234c7d'
              style={{ fontSize: 35 }}
            />
          </View>
          <Text style={styles.ClintName}>{route.params.service}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
            }}
          >
            <Text style={styles.subTitle}>
              30
              <Text style={{ color: '#234c7d', fontWeight: 'bold' }}>
                {' '}
                Smart Pro
              </Text>
              Available in Newtown
              <Icon name='location' color='#234c7d' style={{ fontSize: 35 }} />
            </Text>
            <Image source={{uri: route.params.img}} style={styles.serviceImage} />
          </View>
          <HandymanDetail />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginTop: 5,
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#EDF1FB',
  },
  ClintName: {
    fontSize: 30,
    color: '#335580',
    fontWeight: 'bold',
    marginVertical: 10,
    letterSpacing: 1,
  },
  subTitle: {
    color: '#335580',
    fontSize: 25,
    width: '40%',
    alignSelf: 'center',
  },
  serviceImage: {
    alignSelf: 'flex-end',
    marginTop: 10,
    width: '50%',
    height: 140,
    borderRadius: 20,
  },
});

export default HandymanAvailable;

