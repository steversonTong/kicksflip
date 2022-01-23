import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_header}>
        <Text style={styles.text_header}>Log In</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text_basic}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#4B4B4B" size={20} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#556B2F",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  text_basic: {
    color: "#4B4B4B",
    alignItems: "flex-start",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4B4B4B",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
