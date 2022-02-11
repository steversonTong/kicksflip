import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="chevron-left"
          color="#556B2F"
          size={25}
          style={{ paddingLeft: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.text_normal}>
        <Text style={{ color: "white" }}>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  text_normal: {
    alignItems: "center",
  },
});
