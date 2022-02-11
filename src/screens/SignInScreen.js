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

import { AuthContext } from "../components/context";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    secureTextEntry: true,
  });
  const [email, setEmail] = React.useState("");
  // const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  const handleEmailChange = (val) => {
    setData({
      ...data,
      // username: val,
      email: val,
    });
  };

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

  const loginHandle = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("email: ", user.email);
      })
      .cacth((error) => alert(error.message));
  };

  return (
    //password hidekey not working properly
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light content" />
      <View style={styles.text_header}>
        <Text style={{ color: "#556B2F" }}>Log In</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="chevron-left"
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
            placeholder="Email"
            style={styles.text_input}
            autoCapitalize="none"
            onChangeText={(val) => handleEmailChange(val)}
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
          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 10, marginTop: 20 }}>
            By proceeding, you agree to both:{" "}
            <Text style={styles.underline}>Private Policy</Text> &{" "}
            <Text style={styles.underline}>Terms of Services</Text>
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                // console.log("username:", data.username);
                // console.log("password:", data.password);
                loginHandle;
              }}
            >
              <Text style={{ color: "white" }}>Log In</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 20,
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
  underline: { textDecorationLine: "underline" },
});
