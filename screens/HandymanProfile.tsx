import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Data from "../DataStore/DataService";
import HandymanInformation from "../components/HandymanInformation";
import { View, Text } from "../components/Themed";
import Icon from "react-native-vector-icons/EvilIcons";

const ProfileView = () => {
  return (
    <View>
      <HandymanInformation {...Data[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#234c7d",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  service: {
    color: "#234c7d",
    fontWeight: "normal",
  },
  separator: {
    height: 1.5,
    width: "80%",
    alignSelf: "center",
  },
  backgroundColor: {
    height: "95%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 30,
    margin: 5,
    paddingTop: 5,
  },

  //   header: {
  //     backgroundColor: "#EDF1FB",
  //   },
  //   headerContent: {
  //     padding: 30,
  //     alignItems: "center",
  //   },
  //   avatar: {
  //     width: 130,
  //     height: 130,
  //     borderRadius: 63,
  //     borderWidth: 4,
  //     borderColor: "white",
  //     marginBottom: 10,
  //   },
  //   name: {
  //     fontSize: 22,
  //     color: "#FFFFFF",
  //     fontWeight: "600",
  //   },
  //   profileDetail: {
  //     // alignSelf: "center",
  //     marginTop: 200,
  //     // alignItems: "center",
  //     flexDirection: "column",
  //     position: "absolute",
  //     backgroundColor: "#ffffff",
  //   },
  //   detailContent: {
  //     margin: 10,
  //     alignItems: "center",
  //   },
  //   title: {
  //     fontSize: 20,
  //     color: "#00CED1",
  //   },
  //   count: {
  //     fontSize: 18,
  //   },
  //   bodyContent: {
  //     flex: 1,
  //     alignItems: "center",
  //     padding: 30,
  //     marginTop: 40,
  //   },
  //   textInfo: {
  //     fontSize: 18,
  //     marginTop: 20,
  //     color: "#696969",
  //   },
  //   buttonContainer: {
  //     marginTop: 10,
  //     height: 45,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginBottom: 20,
  //     width: 250,
  //     borderRadius: 30,
  //     backgroundColor: "#00CED1",
  //   },
  //   description: {
  //     fontSize: 20,
  //     color: "#00CED1",
  //     marginTop: 10,
  //     textAlign: "center",
  //   },
});

export default ProfileView;
