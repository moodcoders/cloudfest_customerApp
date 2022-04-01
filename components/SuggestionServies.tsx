import React from 'react';
import { StyleSheet, Image, Text, ScrollView } from 'react-native';
import DataServices from '../DataStore/DataService';
import { View } from './Themed';

interface MemberProp {
    img: any,
    name: String
}

function Member(props: MemberProp) {
    return (
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', }}>
            <Image source={props.img} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{props.name}</Text>
        </View>
    );
}

interface serviceProp {
    name: String,
    img: any
}

interface listOfServicesProp {
    serviceList: serviceProp[]
}

function ListOfServices(props: listOfServicesProp) {
    return (
        <>
            {props.serviceList.map((s: serviceProp) => (
                <Member name={s.name} img={s.img} />
            ))}
        </>
    );
}

const SuggestionServies = () => {
    return (
        < ScrollView >
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
        backgroundColor: 'transparent'
    },
    serviceName: {
        fontSize: 20,
        color: "#3a4c70",
        marginBottom: 10,
    },
});

export default SuggestionServies;

