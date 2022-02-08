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
import LOGOUT from "react-native-vector-icons/MaterialCommunityIcons";
import PROFILE from "react-native-vector-icons/Ionicons";

import { AuthContext } from "../components/context";

const AccountScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.normal_text}>
            <PROFILE name="ios-person" color="#FAEBD7" size={20} /> Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
        >
          <Text style={styles.logout}>
            <LOGOUT name="exit-to-app" color="#556B2F" size={20} /> Log Out
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  line: {
    paddingHorizontal: 15,
    margin: 11,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: "lightgrey",
  },
  normal_text: {
    color: "#FAEBD7",
    fontSize: 20,
  },
  logout: {
    color: "#556B2F",
    fontSize: 20,
    fontWeight: "bold",
  },
});
