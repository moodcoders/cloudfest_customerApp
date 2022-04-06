import React from 'react'
import { StyleSheet, ScrollView, Image } from 'react-native';
import { View, Text } from './Themed';
import Applicance from '../DataStore/Applicance';

import DataServices from '../DataStore/DataService';
interface MemberProp {
    img: any,
    name: String,
}

function Category(props: MemberProp) {
    return (
        <View style={styles.applicanceItem}>
            <Image source={props.img} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{props.name}</Text>
        </View>
    );
};
interface ListServiceProp {
    name: String,
    img: any
}
interface CategoryServicesProp {
    ServiceList: ListServiceProp[]
}

function CategoryServices(props: CategoryServicesProp) {
    return (
        <>
            {props.ServiceList.map((s: ListServiceProp, i) => (
                <Category key={i} name={s.name} img={s.img} />
            ))}
        </>
    );
};

export const ApplicanceServices = () => {
    return (
        <ScrollView
            horizontal showsHorizontalScrollIndicator={false} >
            <CategoryServices ServiceList={Applicance} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    applicanceItem: {
        alignItems: 'center',
        margin: 8,
        backgroundColor: '#EDF1FB',
        borderRadius: 15,
        width: 125,
        height: 125,
    },
    serviceImage: {
        width: 80,
        height: 80,
        margin: 8
    },
    serviceName: {
        fontSize: 15,
        color: "#5e8abf",
        letterSpacing: -.5,
    },

});

export default ApplicanceServices;

