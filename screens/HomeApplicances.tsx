import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import Fridge from '../assets/Icons/refrigerator.png';



const HomeApplicances = ({ navigation }: any) => {
    return (
        <View>
            <View>
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={[styles.separator, { backgroundColor: '#eee' }]} />
            </View>

            <View style={[styles.backgroundColor, { backgroundColor: "#EDF1FB" }]}>
                <View style={{ padding: 10, backgroundColor: 'transparent' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-left'
                                onPress={() => navigation.navigate("ServicePage")}
                                color='#fff'
                                style={{ fontSize: 35, backgroundColor: '#bbd0fa', borderRadius: 5, width: 30 }}
                            />
                        </TouchableOpacity>
                        <Icon
                            name='user'
                            onPress={() => console.log('profile button press')}
                            color='#234c7d'
                            style={{ fontSize: 35, }}
                        />
                    </View>
                    <Text style={styles.ClintName}>Home Applicances</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                        <Text style={styles.subTitle}>Rs. 100/hr </Text>
                        <Image source={Fridge} style={styles.serviceImage} />
                    </View>
                </View>
                <View style={styles.serviceItems}>
                    <Text style={[styles.ClintName, { fontSize: 18 }]}>Select Service</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#234c7d',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
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
    backgroundColor: {
        // height: '100%',
        width: '93%',
        alignSelf: 'center',
        borderRadius: 30,
        padding: 10
    },
    ClintName: {
        fontSize: 30,
        color: "#335580",
        fontWeight: 'bold',
        marginVertical: 10,
        letterSpacing: 1,
    },
    subTitle: {
        color: '#335580',
        fontSize: 25,
        alignSelf: 'center',

    },
    serviceImage: {
        alignSelf: 'flex-end',
        width: '50%',
        height: 160,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    serviceItems: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,
    }
});

export default HomeApplicances;