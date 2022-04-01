import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchInput from '../components/Search/SearchBar';
import SuggestionServies from '../components/SuggestionServies';
import { View, Text } from '../components/Themed';


function ServicePage() {
    return (

        <SafeAreaView >
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <View style={styles.backgroundColor} lightColor="#edf1fb" darkColor="rgba(0, 0, 0, 0.22)">
                <Text style={styles.locationSelection}>
                    implement later
                </Text>
                <SearchInput />
                <Text style={styles.subTitle}>Get your work done.{"\n"}Choose Services</Text>
                <SuggestionServies />
            </View>
        </SafeAreaView >
    );
};

export default ServicePage;

const styles = StyleSheet.create({
    title: {
        color: '#234c7d',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    },
    service: {
        color: '#234c7d',
        fontWeight: 'normal'
    },
    separator: {
        height: 1.5,
        width: '80%',
        alignSelf: 'center',
    },
    backgroundColor: {
        height: '95%',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 10
    },
    locationSelection: {
        width: '100%',
        height: '10%',
        backgroundColor: 'pink',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 30,
        color: "#333",
    },
    subTitle: {
        color: '#234c7d',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});
