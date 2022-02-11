import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "./AccountScreen";
import ProfileScreen from "./account/ProfileScreen";

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = ({ navigation }) => {
  return (
    <AccountStack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
