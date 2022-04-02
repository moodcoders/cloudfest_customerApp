import { Button, StyleSheet, Image } from "react-native" // ' text and view from '../components/themed'
import Icon2  from 'react-native-vector-icons/FontAwesome';
import { View, Text } from "../../components/Themed"


interface PayCardParams {
    icon: string,
    name: string,
    color: string,
    setStripeTab ?: any,
    setBookingDone ?: any,
    n ?: string
}
const PayCard = ({icon, name, color, setStripeTab, setBookingDone, n}: PayCardParams) =>{
    return(
        <View style={styles.cardContainer}>
            <Icon2 name={icon} size={30} color={color} style={styles.cardIcon}/>
            <Text style={styles.cardText}> {name} </Text>
            { n==='1'?
                <Icon2 name='circle-thin' color='#E7EBED' style={styles.cardIcon} onPress={() =>{ setStripeTab(true) } }/> :
                <Icon2 name='circle-thin' color='#E7EBED' style={styles.cardIcon} onPress={() =>{ setBookingDone(true); console.log('booking done thingy') } }/> 
            }
        </View>
    )
}

export default PayCard

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
})
