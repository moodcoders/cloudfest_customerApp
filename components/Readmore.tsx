import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Data from "../DataStore/DataService";

const PostContent = () => {
  const newData = Data.map(function (value) {
    return value;
  });
  const postDescription = newData[0].bio;

  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.postContentContainer}>
      {postDescription.length > 120 ? (
        showMore ? (
          <TouchableOpacity onPress={() => setShowMore(!showMore)}>
            <Text style={styles.postDescription}>
              {postDescription}
              <Text style={styles.seeMore}>Show less</Text>
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowMore(!showMore)}>
            <Text style={styles.postDescription}>
              {`${postDescription.slice(0, 120)}... `}
              <Text style={styles.seeMore}>Show more</Text>
            </Text>
          </TouchableOpacity>
        )
      ) : (
        <Text style={styles.postDescription}>{postDescription}</Text>
      )}
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  postContentContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#35B2E6",
    flexDirection: "column",
  },

  postMedia: {
    borderWidth: 0.5,
    borderColor: "#35B2E6",
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },

  postDescription: {
    paddingTop: 5,
    padding: 5,
  },

  seeMore: {
    color: "#000000",
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
