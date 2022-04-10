import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, StatusBar, TextInput } from "react-native";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import SuggestionServies from '../components/SuggestionServies';
import Separator from '../components/Separator';
import Colors from '../constants/Colors';
import LocationMenu from "../components/LocationMenu";

const ServicePage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
            </View >
            <View style={{ backgroundColor: '#EDF1FB', height: '92%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }}>
                    <Ionicons name="location-sharp" size={40} color="#234c7d" />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.textStyle,]}>Home</Text>
                            <AntDesign
                                onPress={() => setModalVisible(true)}
                                name="down" size={24} color="#234c7d"
                            />
                        </View>
                        <View >
                            <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: '50%', color: "#234c7d" }}>
                                DC 250, Street 314, New Town, Action Area 1, DC Block, West Bengal.
                            </Text>
                        </View>
                    </View>
                </View>
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
                <View>
                    <Text style={styles.subTitle}>Get your work done.{"\n"}Choose Services</Text>
                </View>
                <SuggestionServies />
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={[{ marginTop: '20%', backgroundColor: 'transparent' }]}>
                            <View style={{ backgroundColor: '#333', width: 50, alignSelf: 'center', borderRadius: 55 }}>
                                <Text
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.closeBtn}>
                                    X
                                </Text>
                            </View>
                            <View style={styles.modalView}>
                                <LocationMenu />
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#234c7d',
        textAlign: 'center',
        fontSize: 25,
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
        width: '100%'
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
    modalView: {
        height: '90%',
        width: "100%",
        borderRadius: 40,
        backgroundColor: "#fff",
    },
    textStyle: {
        marginRight: 8,
        color: "#234c7d",
        fontSize: 25,
    },
    closeBtn: {
        color: "#FFF",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default ServicePage;

