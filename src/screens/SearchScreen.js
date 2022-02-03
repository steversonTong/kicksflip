import React from "react";
import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchType from "../components/Searchbar";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchType />
      <Text style={{ color: "white" }}>Search Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SearchScreen;
