import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Feather } from '@expo/vector-icons';

import FilterList from "../assets/fonts/filter.png";

import BookingCards from '../components/BookingCards';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getBookingsForUser } from '../services/booking';

export interface bookingDataType {
    _id: any,
    location: string
    serviceType: string,
    schedule: Date,
    isCompleted: boolean,
    handyman: {
        name: string,
        rating: number,
        experience: number,
        profile: string,
        image: string,
        _id: any
    },
    userId: any,
    isPaid: boolean,
    paymenType: string,
    rating: {
        feedback: string,
        rating: number,
        _id: any
    },
    cost: number,
    __v: 0
}

const MyBooking = ({ navigation }: any) => {
    const [bookingData, setbookingData] = useState<bookingDataType[]>([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    useEffect(() => {
        (async () => {
            const data = await getBookingsForUser("623b7de9686da70164931c7c")
            if (data) {
                setbookingData(data)
            }
        })()
    }, [])

    return (
        <SafeAreaView >
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <View style={styles.backgroundColor} lightColor="#edf1fb" darkColor="rgba(0, 0, 0, 0.22)">
                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', padding: 10 }}>
                    <TouchableOpacity >
                        <Icon
                            name='chevron-left'
                            onPress={() => navigation.navigate("Home")}
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
                    {
                        bookingData.map((booking: bookingDataType) => {
                            return <BookingCards key={booking._id} booking={booking} />
                        })
                    }
                </ScrollView>
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
