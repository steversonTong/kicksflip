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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import { AuthContext } from "../components/context";

const AccountScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={styles.normal_text}>
            <Feather name="user" color="#FAEBD7" size={20} /> Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => navigation.navigate("WantsScreen")}>
          <Text style={styles.normal_text}>
            <Feather name="gift" color="#FAEBD7" size={20} /> Wants
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CollectionScreen")}
        >
          <Text style={styles.normal_text}>
            <Feather name="box" color="#FAEBD7" size={20} /> Collection
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TradeHistoryScreen")}
        >
          <Text style={styles.normal_text}>
            <Feather name="book" color="#FAEBD7" size={20} /> Trade History
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
          <Text style={styles.normal_text}>
            <Feather name="settings" color="#FAEBD7" size={20} /> Settings
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HowItWorksScreen")}
        >
          <Text style={styles.normal_text}>
            <Feather name="info" color="#FAEBD7" size={20} /> How it Works
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => navigation.navigate("HelpScreen")}>
          <Text style={styles.normal_text}>
            <Feather name="help-circle" color="#FAEBD7" size={20} /> Help
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.normal_text}>
            <Feather name="book-open" color="#FAEBD7" size={20} /> Private
            Policy
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.normal_text}>
            <Feather name="book-open" color="#FAEBD7" size={20} /> Terms of
            Services
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
            <MaterialCommunityIcons
              name="exit-to-app"
              color="#556B2F"
              size={20}
            />
            Log Out
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
    fontSize: 18,
  },
  logout: {
    color: "#556B2F",
    fontSize: 20,
    fontWeight: "bold",
  },
});
