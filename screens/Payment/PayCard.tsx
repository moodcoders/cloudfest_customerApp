import Icon2 from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

interface PayCardParams {
    icon: string,
    name: string,
    color: string,
    page: string,
    navigation: any
};

/**
 * Displayes individual card components using the params passed 
 *
 * @param icon - the icon displayed on the card
 * @param name - name of the card
 * @param color - color of the icon
 * @param page - the next page that the card will lead to
 * @param navigation - object that contains react-navigation methods
 * 
 * @returns JSX.Element
 *
 */
const PayCard = ({ icon, name, color, page, navigation }: PayCardParams) => {
    return (
        <View style={styles.cardContainer}>
            <Icon2 name={icon} size={30} color={color} style={styles.cardIcon} />
            <Text style={styles.cardText}> {name} </Text>
            <Icon2 name='circle-thin' color='#E7EBED' style={styles.cardIcon}
                    onPress={() => navigation.navigate(page)} /> 
        </View>
    )
};

export default PayCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        //backgroundColor:'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        padding: 13,
        borderColor: '#E7EBED',
        borderWidth: 2.5,
        borderTopWidth: 0,
        marginBottom: 5
    },
    cardText: {
        color: '#234C7D',
        fontSize: 18,
    },
    cardIcon: {
        fontSize: 35
    }
});
