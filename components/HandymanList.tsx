import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import Carousel from 'react-native-snap-carousel';

//
import DataServices from '../DataStore/DataService';

const renderItem = ({ item }: { item: any }) => {
    return (
        <View style={styles.cardList}>
            <Image source={item.img} style={styles.handymanImage} />
            <View style={{ marginTop: -110, marginLeft: 130, backgroundColor: 'transparent' }}>
                <Text style={styles.handymanName}>{item.name}</Text>
                <Text style={styles.handymanPrice}> 200 $</Text>
                <Text style={styles.handymanOffer}>20% off</Text>
            </View>
        </View>
    );
};

const SLIDER_WIDTH = Dimensions.get('window').width + 5;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const HandymanList = () => {
    return (
        <Carousel
            data={DataServices}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            autoplayInterval={3000}
            autoplay
            loop
        />
    );
};

const styles = StyleSheet.create({
    cardList: {
        padding: 10,
        backgroundColor: '#c9dafa',
        height: 140,
        marginTop: 10,
        width: '100%',
    },
    handymanImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    handymanName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#335580",
        marginLeft: 5,
    },
    handymanPrice: {
        color: "#335580",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
    },
    handymanOffer: {
        color: "#335580",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -27,
        marginLeft: 80,

    }
});

export default HandymanList;