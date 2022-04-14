import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Ionicons } from '@expo/vector-icons';

import Img from "../assets/images/photography.png";
import ToggleBtn from '../components/ToggleBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
    return (
        <SafeAreaView>
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} />
            </View>
            <View style={{ backgroundColor: '#EDF1FB', height: '100%', borderRadius: 20 }}>
                <View style={styles.backgroundColor}>
                    <TouchableOpacity >
                        <Icon
                            name='chevron-left'
                            color='#333'
                            style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', }}>
                        <Ionicons name="settings-sharp" size={40} color="#fff" />
                        <Text style={[styles.subTitle,]}>Settings</Text>
                    </View>
                </View>
                <View style={styles.card} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={Img}
                        />
                        <Text style={styles.clintName}>Md Ghazanfar</Text>
                    </View>
                    <View style={[styles.separator, { width: '100%', marginTop: 10 }]} />
                    <View>
                        <Text style={{ color: "#ADADAD", fontSize: 20, padding: 10 }} >Account Settings</Text>
                    </View>

                    <View style={styles.setting}>
                        <Text style={styles.feature}>Language</Text>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                color='#333'
                                style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>Add a payment method</Text>
                        <TouchableOpacity >
                            <Ionicons name="add" color="black"
                                style={[styles.backIcon, { fontSize: 28, }]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>Push notifications</Text>
                        <View>
                            <ToggleBtn />
                        </View>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>Dark mode</Text>
                        <View>
                            <ToggleBtn />
                        </View>
                    </View>
                    <View style={[styles.separator, { width: '100%', marginTop: 10 }]} />
                    <Text style={{ color: "#ADADAD", fontSize: 20, padding: 10 }} >More</Text>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>About us</Text>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                color='#333'
                                style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>Privacy policy</Text>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                color='#333'
                                style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.feature}>Terms and conditions</Text>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                color='#333'
                                style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
        backgroundColor: '#CACACA'
    },
    backgroundColor: {
        height: "32%",
        width: '95%',
        alignSelf: 'center',
        margin: 5,
        padding: 15,
        backgroundColor: '#35B2E6',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    backIcon: {
        fontSize: 35,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 35,
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 30,
        marginLeft: 10,
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold'

    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingVertical: 10,
        width: '90%',
        marginVertical: 10,
        paddingBottom: "5%",
        alignSelf: 'center',
        marginTop: -160
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    clintName: {
        alignItems: 'center',
        fontSize: 20,
        color: "#335580",
        fontWeight: 'bold',
        marginLeft: 10
    },
    feature: {
        color: '#333',
        fontSize: 20,
        fontWeight: '300'
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
});

export default Settings;