import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from 'react-native';
import { Text, View } from './Themed';

import Icon from 'react-native-vector-icons/Foundation';
import Rupee from 'react-native-vector-icons/FontAwesome';

import "../DataStore/HandyData";
import DataServices from "../DataStore/DataService";

function HandymanDetail() {
    return (
        <View style={{ backgroundColor: 'transparent', }} >
            {DataServices.map((handyman) => {
                return (
                    <View key={handyman.id} style={[styles.card]} >
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={handyman.img}
                            />
                        </View>
                        <View>
                            <Text style={styles.name}>{handyman.name}</Text>
                            <Text style={{ color: 'red' }}>{handyman.exp}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 35 }}>
                                <Text style={styles.data}>Rating{"\n"}
                                    <Icon
                                        name='star'
                                        onPress={() => console.log('back button press')}
                                        color='gold'
                                        style={{ fontSize: 15 }}
                                    />{handyman.rating}</Text>
                                <Text style={styles.data}>TotalJobs{"\n"}{handyman.totalJobs}</Text>
                                <Text style={styles.data}>Rate
                                    {"\n"}
                                    <Rupee
                                        name='rupee'
                                        onPress={() => console.log('back button press')}
                                        color='#333'
                                        style={{ fontSize: 15, fontWeight: 'bold' }}
                                    />{handyman.rate}</Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default HandymanDetail;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 10,
    },
    image: {
        width: 120,
        height: 150,
        marginRight: 10,
        borderRadius: 20
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        color: "#335580",
        fontWeight: 'bold'
    },
    data: {
        color: '#333',
        fontSize: 15,
        margin: 3,
    }
});
