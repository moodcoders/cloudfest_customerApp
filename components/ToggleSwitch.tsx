import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import LocationService from "../components/Location";

const Toggle = (props: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if (isEnabled === false) {
      props.onClick();
    }
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default Toggle;
