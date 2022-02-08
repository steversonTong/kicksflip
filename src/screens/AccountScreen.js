import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../components/context";

const AccountScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
        >
          <Text style={styles.logout}>
            <Icon name="exit-to-app" color="#556B2F" size={20} /> Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
  line: {
    margin: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  logout: {
    color: "#556B2F",
    fontSize: 20,
  },
});
