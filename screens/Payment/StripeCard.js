import React, { useState } from "react";
import Icons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { View, Text } from "../../components/Themed";

const API_URL = "http://192.168.0.113:3000";

/**
 * Carries out card payment logic in stripe also provides stripe card UI
 *
 * @param navigation - object that contains react-navigation methods
 * @returns JSX.Element
 *
 */

const StripeApp = ({ navigation }) => {
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
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
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
          navigation.navigate("BookingDone");
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Text style={styles.payHeading}>  <Text style={{ fontWeight: 'bold' }}>SMART</Text>SERVICES   </Text>
      <Icons
        name='chevron-back-circle'
        onPress={() => navigation.navigate("PayPage")}
        color='#35B2E6'
        style={{ fontSize: 40, marginLeft: "5%" }}
      />
      <Text style={styles.payment}> Card Details</Text>
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
            number: "4242 ...",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={cardDetails => {
            setCardDetails(cardDetails);
          }}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </View>
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
    margin: '2.5%',
    padding: '5%'
  },
  payment: {
    color: '#234C7D',
    fontSize: 25,
    margin: "3%",
    alignSelf: "center"
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