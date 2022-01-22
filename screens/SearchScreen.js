import { StyleSheet, Text, Button, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Search Screen</Text>
      <Button
        title="Go to search screen ... again"
        onPress={() => navigation.push("Search")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SearchScreen;
