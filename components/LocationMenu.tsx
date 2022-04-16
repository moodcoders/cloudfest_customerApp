import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { View, Text } from '../components/Themed';

import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const LocationMenu = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.subTitle}>Select a location</Text>
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
                    placeholder="Search for Area, street name"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={[styles.card]}>
                <View style={{ flexDirection: 'row', }}>
                    <Feather name="compass" size={28} color="#599bd8" />
                    <View>
                        <Text style={styles.bookingDate}>Use current location</Text>

                        <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: '65%', color: "#234c7d", marginLeft: 10 }}>
                            DC 250, Street 314, New Town, Action Area 1, DC Block, West Bengal.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity >
                    <Icon
                        name='chevron-right'
                        color='#333'
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={styles.separator}
                lightColor='#eee'
                darkColor='rgba(0, 0, 0, 0.22)'
            />
            <ScrollView>
                <Text style={styles.subTitle}>Saved Addresses</Text>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="home" size={24} color="#234c7d" />
                        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                            <Text style={styles.HomeAddress}>Home</Text>
                            <Text style={styles.address}>DC 250, Street 314, New Town, Action Area 1, DC Block, West Bengal.</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <MaterialIcons name="work" size={24} color="#234c7d" />
                        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                            <Text style={styles.HomeAddress}>Office</Text>
                            <Text style={styles.address}>DC 250, Street 314, New Town, Action Area 1, DC Block, West Bengal.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default LocationMenu;

const styles = StyleSheet.create({

    subTitle: {
        color: '#234c7d',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        padding: 10
    },
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "92%",
        marginRight: 20,
        height: 50,
        backgroundColor: '#EDF1FB',
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
    separator: {
        height: 2,
        width: '95%',
        alignSelf: 'center',
        color: '#335580',
    },
    card: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookingDate: {
        fontSize: 20,
        color: '#234c7d',
        fontWeight: 'bold',
        marginLeft: 10
    },
    rightIcon: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center'
    },
    HomeAddress: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#234c7d',
    },
    address: {
        fontSize: 15,
        color: "#333",
        fontWeight: '300',
        width: '70%',
    }
});
