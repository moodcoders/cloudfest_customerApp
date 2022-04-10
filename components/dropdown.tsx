import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Dropdown() {
  const [gender, setGender] = useState("");
  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={gender}
        onValueChange={(value, index) => setGender(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Select your gender" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Trans" value="Trans" />
      </Picker>
    </View>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  picker: {
    width: 300,
    color: "gray",
  },
});
