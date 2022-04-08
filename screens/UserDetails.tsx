import React, { useState } from "react";
import { StyleSheet, TextInput, Image, SafeAreaView } from "react-native";
import { View, Text } from "../components/Themed";
import Dropdown from "./dropdown";

const UserDetails = () => {
  // const [text, onChangeText] = useState(" Text");

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>
          SMART<Text style={styles.service}>SERVICE</Text>
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(0,0,0,0.22)"
        />

        <View style={styles.rectangle}>
          <Image
            source={require("../assets/images/backIcon.png")}
            style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Image
          source={require("../assets/images/userprofileIcon.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.title}>User Details</Text>
      </View>
      <View style={styles.rectangle2}>
        <View style={styles.rectangle3}>
          <TextInput placeholder="Name" style={styles.inputContainer} />
        </View>
        <View style={styles.rectangle3}>
          <TextInput
            placeholder="Email"
            keyboardType={"email-address"}
            style={styles.inputContainer}
          />
        </View>
        <View style={{ backgroundColor: "transparent", flexDirection: "row" }}>
          <View style={styles.rectangle4}>
            <Text style={{ alignSelf: "center", marginTop: 12 }}>+91</Text>
          </View>
          <View style={[styles.rectangle3, { width: 217.5 }]}>
            <TextInput
              maxLength={10}
              placeholder="Phone Number"
              keyboardType="number-pad"
              style={styles.inputContainer}
            />
          </View>
        </View>

        <View style={styles.rectangle3}></View>

        <View style={styles.rectangle3}>
          <Dropdown />
        </View>
        <View style={styles.rectangle3}>
          <TextInput placeholder="Address" style={styles.inputContainer} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#234C7D",
    textAlign: "center",
  },
  service: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#234C7D",
  },
  inputContainer: {
    textAlign: "center",
    marginTop: 7,
    color: "#90AAC9",
  },
  rectangle: {
    height: 40,
    width: 40,
    marginLeft: 20,
    backgroundColor: "#E7F2FF",
    alignItems: "flex-start",
    borderRadius: 8,
  },
  rectangle2: {
    height: 516,
    width: 325,
    backgroundColor: "#E7F2FF",
    borderRadius: 12,
    alignSelf: "center",
  },
  rectangle3: {
    height: 44.12,
    width: 300,

    backgroundColor: "#FFFFFF",
    marginTop: 15,
    marginLeft: 12.5,
    borderRadius: 12,
  },
  rectangle4: {
    height: 44.12,
    width: 70,
    backgroundColor: "#FFFFFF",
    marginTop: 15,
    marginLeft: 12.5,
    borderRadius: 12,
  },
  separator: {
    marginVertical: 3,
    height: 1.5,
    width: "90%",
    alignSelf: "center",
  },
});

export default UserDetails;
