import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Data from "../DataStore/DataService";
import { View, Text } from "../components/Themed";
import Icon from "react-native-vector-icons/EvilIcons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import PostContent from "../components/Readmore";
import AnimatableFadeItems from "../components/AnimatableFadeItems";

const ProfileView = () => {
  const newData = Data.map(function (value) {
    return value;
  });

  return (
    <View>
      <View>
        <Text style={styles.title}>
          {" "}
          SMART<Text style={styles.service}> SERVICES</Text>
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(0, 0, 0, 0.22)"
        />
      </View>
      <View
        style={styles.backgroundColor}
        lightColor="#edf1fb"
        darkColor="rgba(0, 0, 0, 0.22)"
      >
        <View
          style={{
            backgroundColor: "transparent",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="#333"
              style={{
                fontSize: 40,
                backgroundColor: "#fff",
                borderRadius: 5,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.handyimage}>
          <View style={[styles.data, { borderRadius: 15 }]}>
            <Text style={styles.data}>
              <FontAwesome name="star" size={20} color="gold" />
              {newData[0].rating}
            </Text>
          </View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={newData[0].img}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.handydetails}>
            <Text style={styles.name}>{newData[0].name}</Text>
            <TouchableOpacity style={styles.serviceBtn}>
              <Text style={styles.btnName}>Select</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.rate}>
            <FontAwesome name="rupee" size={20} color="black" />
            {newData[0].rate}/hr
          </Text>
          <Text>
            <EvilIcons name="location" size={15} color="black" />
            {newData[0].location}
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 15 }}>
              Bio
            </Text>
            <PostContent />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 3,
                fontSize: 20,
                color: "#000000",
              }}
            >
              Reviews
            </Text>
            <AnimatableFadeItems />
          </View>
        </View>
      </View>
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
    width: "90%",
    alignSelf: "center",
  },
  backgroundColor: {
    height: "90%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    margin: 5,
  },
  handyimage: {
    backgroundColor: "transparent",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  data: {
    fontSize: 18,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  handydetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    marginTop: 5,
    color: "#335580",
    fontWeight: "bold",
  },
  serviceBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#35B2E6",
    width: "25%",
  },

  btnName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  rate: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ProfileView;
