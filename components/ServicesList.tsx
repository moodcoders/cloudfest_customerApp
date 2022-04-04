import React from 'react'
import { StyleSheet, ScrollView, Image } from 'react-native';
import { View, Text } from '../components/Themed';

import DataServices from '../DataStore/DataService';
interface MemberProp {
    img: any,
    name: String,
}

function Category(props: MemberProp) {
    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
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

export const ServicesList = () => {
    return (
        <ScrollView
            horizontal showsHorizontalScrollIndicator={false} >
            <CategoryServices ServiceList={DataServices} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    serviceImage: {
        marginTop: 10,
        borderRadius: 150,
        width: 120,
        height: 120,
    },
    serviceName: {
        fontSize: 20,
        color: "#5e8abf",
        marginTop: 15,
    },
});

export default ServicesList;

