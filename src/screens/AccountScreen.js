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
