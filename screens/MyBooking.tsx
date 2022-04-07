import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Feather } from '@expo/vector-icons';

import FilterList from "../assets/fonts/filter.png";

import BookindDetails from '../components/BookingDetails';

const MyBooking = ({ navigation }: any) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <View >
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <View style={styles.backgroundColor} lightColor="#edf1fb" darkColor="rgba(0, 0, 0, 0.22)">
                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', padding: 10 }}>
                    <TouchableOpacity >
                        <Icon
                            name='chevron-left'
                            onPress={() => console.log("back key press")}
                            color='#333'
                            style={{ fontSize: 40, backgroundColor: '#fff', borderRadius: 5, width: 30 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>My Booking</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
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
                            placeholder="Search all Bookings"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.filterIcon}
                                source={FilterList} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, marginLeft: "4%" }}>Filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    <BookindDetails />
                </ScrollView>
            </View>
        </View >
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
        margin: 5,
        padding: 5,
    },
    subTitle: {
        color: '#333',
        fontSize: 30,
        marginLeft: 20,
        marginTop: -5,
    },
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "65%",
        height: 40,
        backgroundColor: '#fff',
        margin: 8
    },
    serviceInput: {
        fontSize: 20,
        marginLeft: 10,
        color: '#a6b0c5',
    },
    shadowProp: {
        borderWidth: 1,
        borderColor: "#599bd8",
    },
    filterIcon: {
        width: 30,
        height: 30,
    }

});

export default MyBooking;
