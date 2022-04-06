import React, { Component } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "../components/Themed";
import { SafeAreaView } from "react-native";

const UserProfileView = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>
          {" "}
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
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/userprofileIcon.png")}
            />

            <Text style={styles.name}>Sucheta Mahata</Text>
            <Text style={styles.userInfo}>90******11</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.rectangle3}>
            <Image
              source={require("../assets/images/support.png")}
              style={{ width: 30, height: 30, marginTop: 20, marginLeft: 30 }}
            />
            <Text style={{ fontSize: 15, color: "#000000", marginLeft: 17.5 }}>
              Support
            </Text>
          </View>
          <View style={styles.rectangle3}>
            <Image
              source={require("../assets/images/tokens.png")}
              style={{ width: 30, height: 30, marginTop: 20, marginLeft: 30 }}
            />
            <Text style={{ fontSize: 15, color: "#000000", marginLeft: 17.5 }}>
              Tokens
            </Text>
          </View>
          <View style={styles.rectangle3}>
            <Image
              source={require("../assets/images/xyz.png")}
              style={{ width: 30, height: 30, marginTop: 20, marginLeft: 30 }}
            />
            <Text style={{ fontSize: 15, color: "#000000", marginLeft: 17.5 }}>
              Tokens
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={[styles.rectangle2, { flexDirection: "row" }]}>
            <Image
              style={styles.icon}
              source={require("../assets/images/editIcon.png")}
            />
            <Text style={styles.info}>Edit Details</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
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
  separator: {
    marginVertical: 3,
    height: 1.5,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    backgroundColor: "#FFFFFF",
  },
  headerContent: {
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  rectangle: {
    height: 40,
    width: 40,
    backgroundColor: "#E7F2FF",
    left: "5%",
    borderRadius: 8,
  },
  rectangle2: {
    height: 365,
    width: 325,
    backgroundColor: "#E7F2FF",
    left: "5%",
    marginTop: 10,
    borderRadius: 12,
  },
  rectangle3: {
    height: 80,
    width: 90,
    backgroundColor: "#E7F2FF",
    borderRadius: 12,
  },
  // body: {
  //   backgroundColor: "#EDF1FB",
  //   height: 350,
  //   width: 330,
  //   marginLeft: 15,
  //   marginTop: 130,
  //   borderRadius: 20,
  // },
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  // infoContent: {
  //   flex: 1,
  //   alignItems: "flex-start",
  //   paddingLeft: 5,
  // },
  // iconContent: {
  //   flex: 1,
  //   alignItems: "flex-start",
  //   paddingRight: 5,
  //   marginTop: 50,
  // },
  icon: {
    width: 30,
    height: 30,
    margin: 20,
  },
  info: {
    fontSize: 18,
    margin: 20,
    color: "#02080D",
  },
});

export default UserProfileView;
