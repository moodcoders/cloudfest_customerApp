import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

import Icon from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

import DataServices from '../DataStore/DataService';
import StarRating from './StarRating';


const BookingCards = () => {
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: 'transparent', }} >
            {DataServices.map((handyman, index) => {
                return (
                    <View key={index} style={[styles.card]} >
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={handyman.img}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.bookingDate}> Booking On Oct 28,2022</Text>
                            <Text style={styles.workServices}>{handyman.rate}</Text>
                            <StarRating />
                        </View>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                onPress={() => navigation.navigate("BookingDetails" as any)}
                                color='#333'
                                style={styles.rightIcon}
                            />
                        </TouchableOpacity>

                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        borderWidth: 1,
        borderColor: "#20232a",
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 110,
        marginRight: 10,
        borderRadius: 20
    },
    bookingDate: {
        fontSize: 15,
        color: "#333",
        fontWeight: 'bold',
    },
    workServices: {
        fontSize: 15,
        marginTop: 10,
        color: "#333",
    },
    rightIcon: {
        fontSize: 40,
        alignSelf: 'center',
        alignItems: 'center'
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    starImageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
});

export default BookingCards;