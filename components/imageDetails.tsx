import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetails = (props: { title: {} | null | undefined }) => {
  let Imagesource = undefined;
  if (props.title == "Support") {
    Imagesource = require("../assets/images/support.png");
  } else if (props.title == "Tokens") {
    Imagesource = require("../assets/images/tokens.png");
  } else {
    Imagesource = require("../assets/images/xyz.png");
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
  },
  imageStyle: {
    height: 30,
    width: 30,
    margin: 5,
    alignSelf: "center",
  },
  ViewStyle: {
    width: 80,
    backgroundColor: "#EDF1FB",
    borderRadius: 10,
    margin: 5,
    flexDirection: "column",
  },
});

export default ImageDetails;
