import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Icon from "react-native-vector-icons/EvilIcons";
import HandleRelayout from "../screens/Handymantest";
interface bookingParams {
  img: any;
  name: string;
  totalJobs: number;
  exp: string;
  rating: number;
  rate: number;
  jobName: any;
}

const HandymanInformation = (prop: bookingParams) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBorder}>
        <View style={styles.pentagon}>
          <View>
            <Text style={styles.data}>
              <Icon
                name="star"
                onPress={() => console.log("back button press")}
                color="gold"
                style={{ fontSize: 25 }}
              />
              {prop.rating}
            </Text>
          </View>
          <View style={styles.pentagonInner} />
          <View style={styles.pentagonBefore} />
        </View>
        <Image style={styles.image} resizeMode="cover" source={prop.img} />
      </View>
      <View>
        {/* <View style={styles.handydetails}>
          <Text style={styles.name}>{prop.name}</Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    transform: [{ rotateX: "45deg" }, { rotateZ: "60deg" }],
  },
  pentagonInner: {
    width: 100,
    borderBottomColor: "#599BD8",
    borderBottomWidth: 0,
    borderLeftColor: "transparent",
    borderLeftWidth: 18,
    borderRightColor: "transparent",
    borderRightWidth: 18,
    borderTopColor: "#599BD8",
    borderTopWidth: 50,
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
    color: "#333",
    fontSize: 15,
    margin: 3,
    // transform: [{ rotateX: "45deg" }, { rotateZ: "60deg" }],
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
  service: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  separator: {
    marginTop: 5,
    height: 1.5,
    width: "100%",
    alignSelf: "center",
  },
  serviceCharge: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    opacity: 0.8,
  },
});

export default HandymanInformation;
