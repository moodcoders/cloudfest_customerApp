import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Icon from "react-native-vector-icons/EvilIcons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import ReadMore from "./Readmore";
import React from "react";
import ReadMoreDemo from "./Readmore";

interface bookingParams {
  img: any;
  name: string;
  totalJobs: number;
  exp: string;
  rating: number;
  rate: number;
  jobName?: any;
  location: string;
  bio: string;
}

const HandymanInformation = (prop: bookingParams) => {
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
            // flexDirection: "row",
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
        {/* <View style={styles.handyimage}>
          <View style={styles.pentagon}>
            <View style={styles.data}>
              <Text style={{ backgroundColor: "transparent" }}>
                <Icon
                  name="star"
                  onPress={() => console.log("back button press")}
                  color="gold"
                  style={{ fontSize: 25 }}
                />
                {prop.rating}
              </Text>
            </View>
          </View>
          <Image style={styles.image} resizeMode="cover" source={prop.img} />
        </View> */}
        <View style={styles.handyimage}>
          <Image style={styles.image} resizeMode="cover" source={prop.img} />
          <View style={[styles.data, { borderRadius: 20 }]}>
            <Text style={styles.data}>
              <Icon
                name="star"
                // onPress={() => console.log("back button press")}
                color="gold"
                style={{ fontSize: 25 }}
              />
              {prop.rating}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.handydetails}>
            <Text style={styles.name}>{prop.name}</Text>
            <TouchableOpacity style={styles.serviceBtn}>
              <Text style={styles.btnName}>Select</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.rate}>
            <FontAwesome name="rupee" size={20} color="black" />
            {prop.rate}/hr
          </Text>
          <Text>
            <EvilIcons name="location" size={15} color="black" />
            {prop.location}
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 15 }}>
              Bio
            </Text>
            {/* <ReadMore /> */}
            {/* <Text style={{ fontSize: 15 }}>{prop.bio}</Text> */}
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
  rate: {
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    // flexDirection: "column",
  },
  service: {
    color: "#234c7d",
    fontWeight: "normal",
  },
  serviceBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#35B2E6",
    width: "25%",
    // height: "20%",
    // marginTop: 15,
  },
  btnName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  handydetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  separator: {
    height: 1.5,
    width: "80%",
    alignSelf: "center",
  },
  backgroundColor: {
    height: "94%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 30,
    margin: 5,
    paddingTop: 5,
  },
  handyimage: {
    backgroundColor: "transparent",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#EDF1FB",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    marginVertical: 10,
    paddingBottom: "5%",
  },
  pentagon: {
    backgroundColor: "transparent",
    marginRight: -20,
    zIndex: -1,
    transform: [{ rotateY: "-5deg" }, { rotateZ: "0deg" }],
  },
  pentagonInner: {
    width: 100,
    borderBottomColor: "#599BD8",
    borderBottomWidth: 0,
    borderLeftColor: "transparent",
    borderLeftWidth: 1,
    borderRightColor: "transparent",
    borderRightWidth: 18,
    borderTopColor: "#599BD8",
    borderTopWidth: 30,
    backgroundColor: "transparent",
  },
  pentagonBefore: {
    position: "absolute",
    height: 0,
    width: 0,
    top: -35,
    left: 0,
    borderStyle: "solid",
    borderBottomColor: "#599BD8",
    borderBottomWidth: 35,
    borderLeftColor: "transparent",
    borderLeftWidth: 45,
    borderRightColor: "transparent",
    borderRightWidth: 45,
    borderTopWidth: 0,
    borderTopColor: "transparent",
    backgroundColor: "transparent",
  },
  cardBorder: {
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    marginTop: 5,
    color: "#335580",
    fontWeight: "bold",
  },
  data: {
    // color: "#333",
    fontSize: 15,
    margin: 10,
    // backgroundColor: "transparent",
    // borderRadius: 20,
    // zIndex: -1,
    // transform: [{ rotateX: "-45deg" }, { rotateZ: "-60deg" }],
  },
  bookingNumber: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 25,
  },
  priceDetails: {
    color: "#000000",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.5,
  },
  // service: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: 5,
  // },
  // separator: {
  //   marginTop: 5,
  //   height: 1.5,
  //   width: "100%",
  //   alignSelf: "center",
  // },
  serviceCharge: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    opacity: 0.8,
  },
});

export default HandymanInformation;
