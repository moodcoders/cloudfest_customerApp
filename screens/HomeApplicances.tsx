import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Fridge from '../assets/Icons/refrigerator.png';

import ApplicanceServices from '../components/ApplicancesServices';
import Calenders from '../components/Calender';

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
                    <ApplicanceServices />
                    <Text style={[styles.ClintName, { fontSize: 18 }]}>Date &#38; Time</Text>
                    <Calenders />
                    <View>
                        <Text style={[styles.ClintName, { fontSize: 18 }]}>Time</Text>
                    </View>
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
        width: '93%',
        alignSelf: 'center',
        borderRadius: 30,
        padding: 10
    },
    ClintName: {
        fontSize: 30,
        color: "#335580",
        fontWeight: 'bold',
        marginVertical: 4,
        letterSpacing: 1,
    },
    subTitle: {
        color: '#335580',
        fontSize: 25,
        alignSelf: 'center',

    },
    serviceImage: {
        alignSelf: 'flex-end',
        width: '45%',
        height: 140,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    serviceItems: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 8,
    },
    container: {
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default HomeApplicances;