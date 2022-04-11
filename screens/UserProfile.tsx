import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { View, Text } from "../components/Themed";
import { SafeAreaView } from "react-native";
import ImageDetails from "../components/imageDetails";
import ImageBeside from "../components/imageBeside";

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

        <View style={styles.arrangement}>
          <ImageDetails title="Support" />
          <ImageDetails title="Tokens" />
          <ImageDetails title="XYZ" />
        </View>

        <View style={[styles.rectangle2]}>
          <ImageBeside title="Edit" />
          <ImageBeside title="Message" />
          <ImageBeside title="Settings" />
          <ImageBeside title="ShareSmartService" />
          <ImageBeside title="Logout" />
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
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  arrangement: {
    flexDirection: "row",
    justifyContent: "center",
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
    marginTop: 10,
    borderRadius: 12,
    alignSelf: "center",
  },
});

export default UserProfileView;
