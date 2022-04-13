import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Icon from 'react-native-vector-icons/EvilIcons';
import Calender from 'react-native-vector-icons/MaterialCommunityIcons';
import Rupee from 'react-native-vector-icons/FontAwesome';

interface bookingParams {
    img: any,
    name: string,
    totalJobs: number,
    exp: string,
    rating: number,
    rate: number,
    jobName?: any,
};

const BookingHandymanDetails = (prop: bookingParams) => {
    return (
        <View style={styles.card} >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardBoarder}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={prop.img}
                    />
                    <Text>{prop.jobName}</Text>
                </View>
                <View>
                    <Text style={styles.bookingNumber}>Booking Number- bg6789p0 </Text>
                    <Text style={{ marginTop: 25 }}>Smart PRO</Text>
                    <Text style={styles.name}>Shams</Text>
                    <Text style={{ color: 'red' }}>{prop.exp}</Text>
                    <Text style={styles.data}>
                        <Icon
                            name='star'
                            onPress={() => console.log('back button press')}
                            color='gold'
                            style={{ fontSize: 25, }}
                        />
                        {prop.rating}
                    </Text>
                </View>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.bookingNumber}>Date &#38; time</Text>
                <Text>
                    <Calender
                        name='calendar-clock'
                        onPress={() => console.log('back button press')}
                        color='#333'
                        style={{ fontSize: 25, margin: 10 }}
                    /> 9:20 PM Sat,12 Sep 2021
                </Text>
            </View>
            <View>
                <Text style={[styles.priceDetails]}>Charge Details </Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
                <View style={styles.service}>
                    <Text style={styles.serviceCharge}>Service Charge</Text>
                    <Text style={styles.serviceCharge} >
                        <Rupee
                            name='rupee'
                            onPress={() => console.log('back button press')}
                            color='#333'
                            style={{ fontSize: 20, fontWeight: 'bold' }}
                        />
                        {prop.rate}
                    </Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
                <View style={styles.service}>
                    <Text style={styles.serviceCharge}>Amount Paid</Text>
                    <Text style={styles.serviceCharge} >
                        <Rupee
                            name='rupee'
                            onPress={() => console.log('back button press')}
                            color='#333'
                            style={{ fontSize: 20, fontWeight: 'bold' }}
                        />
                        {prop.rate}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 10,
        paddingBottom: "5%",
    },
    cardBoarder: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#599bd8",
        marginRight: 10,
        borderRadius: 15,
        alignSelf: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
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
    },
    bookingNumber: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 25,
    },
    priceDetails: {
        color: '#000000',
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        opacity: 0.5,
    },
    service: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    separator: {
        marginTop: 5,
        height: 1.5,
        width: '100%',
        alignSelf: 'center',
    },
    serviceCharge: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        opacity: 0.8,
    }
});

export default BookingHandymanDetails;

