import React, { useState } from "react";
import Icons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { View, Text } from "../../components/Themed"


//ADD localhost address of your server
const API_URL = "http://192.168.1.25:3000";

const StripeApp = ({setStripeTab, setBookingDone }) => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
          setStripeTab( false );
          setBookingDone( true );
        }
      }
    } catch (e) {
      console.log(e.message);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <>
      <Text style={styles.payHeading}>  <Text style={{ fontWeight: 'bold' }}>SMART</Text>SERVICES   </Text>
      <Text style={styles.payment}> Enter your card details </Text>
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={value => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4562 4587 4587",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={cardDetails => {
            setCardDetails(cardDetails);
          }}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </View>
      <Icons
        name='chevron-back-circle'
        onPress={() =>  setStripeTab(false)}
        color='#BBD0FA'
        style={{ fontSize: 45, alignSelf:"flex-end"}}
      />
    </>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    borderColor: '#E7EBED',
    borderWidth: 2.5,
    borderRadius: 10,
    width: '95%',
    margin: '5%',
    padding: '5%'
  },
  payment: {
    color: '#234C7D',
    fontSize: 25,
    margin: "5%",
    marginLeft: "1%"
  },
  payHeading: {
    color: '#234C7D',
    textAlign: 'center',
    fontSize: 22,
    borderBottomColor: '#E7EBED',
    borderBottomWidth: 1,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});