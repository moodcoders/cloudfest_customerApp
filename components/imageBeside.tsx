import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageBeside = (props: { title: {} | null | undefined }) => {
  let Imagesource = undefined;
  if (props.title == "Edit") {
    Imagesource = require("../assets/images/editIcon.png");
  } else if (props.title == "Message") {
    Imagesource = require("../assets/images/messageIcon.png");
  } else if (props.title == "Settings") {
    Imagesource = require("../assets/images/settingsIcon.png");
  } else if (props.title == "ShareSmartService") {
    Imagesource = require("../assets/images/shareIcon.png");
  } else {
    Imagesource = require("../assets/images/logoutIcon.png");
  }

  return (
    <View style={styles.ViewStyle}>
      <Image source={Imagesource} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "black",
    alignSelf: "center",
    marginLeft: 15,
  },
  imageStyle: {
    height: 30,
    width: 30,
    margin: 20,
    alignSelf: "center",
  },
  ViewStyle: {
    width: 150,
    backgroundColor: "#EDF1FB",
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default ImageBeside;
