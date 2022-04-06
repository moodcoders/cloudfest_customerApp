import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";

const DatePickerApp = () => {
  const [date, setDate] = useState("09-10-2021");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          format="DD/MM/YYYY"
          minDate="01-01-1921"
          maxDate="01-01-2010"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 180,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: "gray",
              alignItems: "flex-start",
              left: 20,
              borderWidth: 0,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray",
            },
            dateText: {
              fontSize: 17,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePickerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  datePickerStyle: {
    width: 200,
  },
});
