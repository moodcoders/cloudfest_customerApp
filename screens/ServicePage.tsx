import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { Feather } from '@expo/vector-icons';

import SuggestionServies from '../components/SuggestionServies';

/**
 * Servicespage Displayes  Services provided by the platform
 * 
 * @returns JSX.Elements
 */

const ServicePage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
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
                <View style={[styles.container, styles.shadowProp]}>
                    {/* Search Icon */}
                    <Feather
                        name="search"
                        size={20}
                        color="#599bd8"
                        style={{ marginLeft: 10 }}
                    />
                    {/* Search Input field */}
                    <TextInput
                        style={styles.serviceInput}
                        placeholder="Service Name"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <Text style={styles.subTitle}>Get your work done.{"\n"}Choose Services</Text>
                <SuggestionServies />
            </View>
        </SafeAreaView >
    );
};

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
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "92%",
        marginRight: 20,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    serviceInput: {
        fontSize: 20,
        marginLeft: 10,
        color: '#a6b0c5',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    subTitle: {
        color: '#234c7d',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default ServicePage;
