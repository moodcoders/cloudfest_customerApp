import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Reviews from "../DataStore/Reviews";
import ShowRating from "../components/ShowRating";

function AnimatableFadeItems() {
  return (
    <ScrollView style={{ height: "70%" }}>
      {Reviews.map((handyman) => {
        return (
          <View key={handyman.id}>
            <View style={styles.item}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "#C4C4C4",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {handyman.rating}
                </Text>
                <ShowRating data={handyman} />

                <Text style={{ color: "#C4C4C4" }}>{handyman.date}</Text>
              </View>
              <Text style={{ color: "#fff", marginLeft: 10 }}>
                {handyman.Review}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
export default AnimatableFadeItems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#599BD8",
    // marginVertical: 0.5,
    paddingBottom: 10,
  },
});
