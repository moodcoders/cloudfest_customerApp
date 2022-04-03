import { StyleSheet } from "react-native";
import Icon2  from 'react-native-vector-icons/FontAwesome';
import { View, Text } from "../../components/Themed";

interface PayCardParams {
    icon: string,
    name: string,
    color: string,
    setStripeTab ?: any,
    setBookingDone ?: any,
    n ?: string,
    navigation : any
};

/**
 * Displayes individual card components using the params passed 
 *
 * @param icon - the icon displayed on the card
 * @param name - name of the card
 * @param color - color of the icon
 * @param n - determines the current active card
 * @param navigation - object that contains react-navigation methods
 * 
 * @returns JSX.Element
 *
 */

const PayCard = ({icon, name, color, n, navigation}: PayCardParams ) =>{
    return(
        <View style={styles.cardContainer}>
            <Icon2 name={icon} size={30} color={color} style={styles.cardIcon}/>
            <Text style={styles.cardText}> {name} </Text>
            { n==='1'?
                <Icon2 name='circle-thin' color='#E7EBED' style={styles.cardIcon} onPress={() => navigation.navigate("StripeCard") }/> :
                <Icon2 name='circle-thin' color='#E7EBED' style={styles.cardIcon} onPress={() =>  navigation.navigate("BookingDone") }/> 
            }
        </View>
    )
};

export default PayCard;

const styles = StyleSheet.create({
    cardContainer :{
        borderRadius: 10,
        //backgroundColor:'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '95%',
        padding: 13,
        borderColor:'#E7EBED',
        borderWidth: 2.5,
        borderTopWidth:0,
        marginBottom: 5
    },
    cardText :{
        color: '#234C7D',
        fontSize : 18,
    },
    cardIcon :{
        fontSize: 35
    }
});
