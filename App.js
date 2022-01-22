import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabScreen from "./screens/MainTabScreen";
import RootStackScreen from "./screens/RootStackScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <MainTabScreen /> */}
    </NavigationContainer>
  );
};

export default App;
