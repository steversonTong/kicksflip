import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>SignUp Screen</Text>
      <Button title="SignUp" onPress={() => alert("Clicked!")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    alignItems: "center",
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SignUpScreen;
