import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import Platform from "expo-modules-core/build/Platform";

const DatePickerApp = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    console.log(fDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View></View>
      <TouchableOpacity
        onPress={() => showMode("date")}
        style={styles.serviceBtn}
      >
        <Text style={styles.btnName}>Select Date of Birth</Text>
      </TouchableOpacity>
      {show && <DatePicker value={date} mode={mode} onChange={onChange} />}
    </View>
  );
};

export default DatePickerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  serviceBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btnName: {
    fontSize: 15,
    color: "#90AAC9",
  },
});
