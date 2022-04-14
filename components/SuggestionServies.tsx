import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

// Importing  images and name from  dataStore
import DataServices from '../DataStore/DataService';
import { useNavigation } from '@react-navigation/native';

interface serviceProp {
  name: String;
  img: any;
}
interface listOfServicesProp {
  serviceList: serviceProp[];
}

// ListOfSerives is maping Image and name
function ListOfServices(props: listOfServicesProp) {
  return (
    <>
      {props.serviceList.map((elements: serviceProp, index) => (
        <Member key={index} name={elements.name} img={elements.img} />
      ))}
    </>
  );
}

interface MemberProp {
  img: any;
  name: String;
}

/**
 *
 * @param props - Displayes Image and Name in the components using the params passed
 * @returns JSX.Elements
 */
const Member = (props: MemberProp) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeApplicances' as any)}
      >
        <Image source={props.img} style={styles.serviceImage} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HandymanAvailable' as any)}
      >
        <Text style={styles.serviceName}>{props.name}</Text>
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
const SuggestionServies = () => {
  return (
    <ScrollView>
      <View style={styles.serviceList}>
        <ListOfServices serviceList={DataServices} />
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
