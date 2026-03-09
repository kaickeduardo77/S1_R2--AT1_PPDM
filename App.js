import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={[styles.box, { backgroundColor: "red" }]} />

      <View style={[styles.box, { backgroundColor: "blue" }]} />
      
      <View style={[styles.box, { backgroundColor: "green" }]} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 20
  },

  box: {
    width: 80,
    height: 80
  }
});