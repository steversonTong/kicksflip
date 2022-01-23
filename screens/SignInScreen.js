import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <HideKeyboard>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="light content" />
        <View style={styles.text_header}>
          <Text style={styles.text_header}>Log In</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            color="#556B2F"
            size={25}
            style={{ marginTop: -24, paddingLeft: 30 }}
          />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.text_basic}>Account</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#4B4B4B" size={20} />
            <TextInput
              placeholder="Email or Username"
              style={styles.text_input}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_basic, { marginTop: 50 }]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#4B4B4B" size={20} />
            <TextInput
              placeholder="Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.text_input}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#4B4B4B" size={20} />
              ) : (
                <Feather name="eye" color="#4B4B4B" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={[styles.text_header, { marginTop: 30 }]}>
            <Text>Forgot Password</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text style={{ color: "white" }}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </HideKeyboard>
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
  text_input: {
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
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#556B2F",
    borderRadius: 10,
    height: 40,
    width: 250,
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
