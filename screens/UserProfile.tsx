import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
  AntDesign,
} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Foundation';
import * as SecureStore from 'expo-secure-store';

import Separator from '../components/Separator';
import Colors from '../constants/Colors';
import { View, Text } from '../components/Themed';
import { Display } from '../constants';
import { AuthContext } from '../constants/Context';
import { getProfileDetails } from '../services/profileDetails';

interface ctx {
  signIn: void;
}
interface profileDataType {
  name: string;
  gender: string;
  email: string;
  DOB: Date;
  address: {
    street: string;
    houseNo: string;
    pincode: string;
    state: string;
    country: string;
  };
  providers: [
    {
      uid: number;
    },
  ];
}
const UserProfileView = ({ navigation }: any) => {
  const { authContext } = useContext<ctx | any>(AuthContext);
  const [profileData, setProfileData] = useState<profileDataType>();

  useEffect(() => {
    (async () => {
      const id = await SecureStore.getItemAsync('id');
      const data = await getProfileDetails(id);
      if (data) {
        setProfileData(data);
      }
    })();
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Text style={styles.title}>
        {' '}
        SMART<Text style={styles.service}> SERVICE</Text>
      </Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(0,0,0,0.22)'
      />

      <TouchableOpacity style={styles.rectangle}>
        <Ionicons
          name='chevron-back-outline'
          size={30}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/userprofileIcon.png')}
        />
        <View>
          <Text>
            <Icon name='star' color='gold' style={{ fontSize: 15 }} />
            4.2
          </Text>
        </View>

        <Text style={styles.name}>{profileData?.name}</Text>
        <Text style={styles.userInfo}>{profileData?.providers[0].uid}</Text>
      </View>

      <View style={styles.arrangement}>
        <TouchableOpacity style={styles.agentStyle}>
          <MaterialIcons name='support-agent' size={44} color='black' />
          <Text>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.agentStyle}>
          <FontAwesome5 name='coins' size={44} color='black' />
          <Text>Token</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.agentStyle}>
          <FontAwesome name='group' size={44} color='black' />
          <Text>Xyz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rectangle2}>
        <TouchableOpacity style={styles.viewStyle}>
          <Feather name='edit' size={34} color='black' />
          <Text style={styles.textStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewStyle}>
          <AntDesign name='message1' size={34} color='black' />
          <Text style={styles.textStyle}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewStyle}
          onPress={() => navigation.navigate('Settings')}
        >
          <Feather name='settings' size={34} color='black' />
          <Text style={styles.textStyle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewStyle}>
          <AntDesign name='sharealt' size={34} color='black' />
          <Text style={styles.textStyle}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewStyle}
          onPress={() => authContext.signOut()}
        >
          <MaterialIcons name='logout' size={34} color='black' />
          <Text style={styles.textStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: Display.setHeight(100),
  },
  title: {
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
  separator: {
    marginVertical: 3,
    height: 1.5,
    width: '90%',
    alignSelf: 'center',
  },
  rectangle: {
    height: 40,
    width: 40,
    backgroundColor: '#E7F2FF',
    left: '6%',
    borderRadius: 8,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  arrangement: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  agentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Display.setHeight(10),
    width: Display.setWidth(20),
    borderRadius: 9,
    marginRight: 30,
    backgroundColor: '#EDF1FB',
  },
  rectangle2: {
    height: Display.setHeight(51),
    width: Display.setWidth(85),
    backgroundColor: '#E7F2FF',
    marginTop: Display.setHeight(2),
    borderRadius: 12,
    alignSelf: 'center',
  },
  viewStyle: {
    // width: 150,
    margin: '7%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 22,
    color: 'black',
    alignSelf: 'center',
    marginLeft: 20,
  },
});

export default UserProfileView;
