import React from 'react'
import { StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import ButtonComponents from '../components/Button';
import { View, Text } from '../components/Themed';
import handymanIcon from '../assets/images/handyman.png'
import ServicesList from '../components/ServicesList';
import HandymanList from '../components/HandymanList';

const HomePage = () => {
    return (
        <SafeAreaView>
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <ScrollView>
                <View style={styles.homePadding} lightColor="#fff" darkColor="rgba(0, 0, 0, 0.22)">
                    <Text style={styles.ClintName}> Hi! Md Ghazanfar</Text>
                    <Text style={styles.subTitle}>What service do{"\n"}you need?</Text>
                    <ButtonComponents />
                    <Image source={handymanIcon} style={styles.serviceImage} />
                    <Text style={styles.listName} >Category</Text>
                    <ServicesList />
                    <Text style={styles.listName}>Recommended</Text>
                    <HandymanList />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    title: {
        color: '#234c7d',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    },
    service: {
        color: "#335580",
        fontWeight: 'normal'
    },
    separator: {
        height: 1.5,
        width: '80%',
        alignSelf: 'center',
        color: "#335580",
    },
    homePadding: {
        padding: 15,
    },
    ClintName: {
        fontSize: 20,
        color: "#335580",
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
        marginTop: -100
    },
    listName: {
        fontSize: 25,
        color: "#335580",
        fontWeight: 'bold',
    }
});
