import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabScreen from "./screens/MainTabScreen";
import RootStackScreen from "./screens/RootStackScreen";
import { View, ActivityIndicator } from "react-native";
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <MainTabScreen /> */}
    </NavigationContainer>
  );
};

export default App;
