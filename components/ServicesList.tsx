import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { View, Text } from '../components/Themed';

import DataServices from '../DataStore/DataService';
import { serviceDataInterface } from '../screens/ServicePage';
import { getServices } from '../services/service';
interface MemberProp {
    img: any,
    name: String,
}

function Category(props: MemberProp) {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeApplicances" as any, {service: props.name, img: props.img} )}>
                <Image source={{ uri: props.img }} style={styles.serviceImage} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeApplicances" as any, {service: props.name, img: props.img})}>
                <Text style={styles.serviceName}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
};
interface ListServiceProp {
    name: String,
    img: any
}

interface CategoryServicesProp {
    service: serviceDataInterface
}

function CategoryServices({ service }: CategoryServicesProp) {
    return (
        <>
            <Category name={service.name} img={service.imgUrl} />
        </>
    );
};

export const ServicesList = () => {
    const [serviceData, setserviceData] = useState<serviceDataInterface[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getServices()
            if (data) {
                setserviceData(data)
            }
        })()
    }, [])

    return (
        <ScrollView
            horizontal showsHorizontalScrollIndicator={false} >
            {
                serviceData.map((service: serviceDataInterface) => {
                    return <CategoryServices key={service._id} service={service} />
                })
            }
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

