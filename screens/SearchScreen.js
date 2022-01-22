import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Search Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SearchScreen;
