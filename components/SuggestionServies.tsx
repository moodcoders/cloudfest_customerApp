import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

// Importing  images and name from  dataStore
import DataServices from '../DataStore/DataService';
import { useNavigation } from '@react-navigation/native';
import { serviceDataInterface } from '../screens/ServicePage';

interface serviceProp {
  name: String;
  img: any;
}
interface listOfServicesProp {
  service: serviceDataInterface;
}

// ListOfSerives is maping Image and name
function ListOfServices({ service }: listOfServicesProp) {
  return (
    <>
      <Member service={service.name} img={service.imgUrl} />
    </>
  );
}

interface MemberProp {
  img: any;
  service: String;
}

/**
 *
 * @param props - Displayes Image and Name in the components using the params passed
 * @returns JSX.Elements
 */
const Member = ( {service, img}: MemberProp) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeApplicances' as any, {service:service, img:img})}
      >
        <Image source={{ uri: img }} style={styles.serviceImage} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeApplicances' as any, {service:service, img:img})}
      >
        <Text style={styles.serviceName}>{service}</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * SuggestionServies  Provides recommendations for service.
 *
 * @returns JSX Elements
 *
 */

interface suggestionServicesProp {
  serviceData: serviceDataInterface[];
}
const SuggestionServies = ({ serviceData }: suggestionServicesProp) => {
  return (
    <ScrollView>
      <View style={styles.serviceList}>
        {serviceData.map((service: serviceDataInterface) => {
          return <ListOfServices key={service._id} service={service} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  serviceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
  },
  serviceImage: {
    marginTop: 10,
    borderRadius: 150,
    width: 140,
    height: 140,
    backgroundColor: 'transparent',
  },
  serviceName: {
    fontSize: 20,
    color: '#3a4c70',
    marginBottom: 10,
  },
});

export default SuggestionServies;
