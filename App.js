import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}></View>

      <View style={styles.box2} ></View>

      <View style={styles.box3} ></View>

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

  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'black'
  },

  
  box2 : {
    width: 80,
    height: 80,
    backgroundColor: 'purple'
  },
  
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'red'
    }

});