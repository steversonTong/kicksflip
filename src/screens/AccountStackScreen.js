import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "./AccountScreen";
import ProfileScreen from "./account/ProfileScreen";
import WantsScreen from "./account/WantsScreen";
import CollectionScreen from "./account/CollectionScreen";
import TradeHistoryScreen from "./account/TradeHistory";
import SettingsScreen from "./account/SettingsScreen";
import HowItWorksScreen from "./account/HowItWorksScreen";
import HelpScreen from "./account/HelpScreen";

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
      <AccountStack.Screen name="WantsScreen" component={WantsScreen} />
      <AccountStack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
      />
      <AccountStack.Screen
        name="TradeHistoryScreen"
        component={TradeHistoryScreen}
      />
      <AccountStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <AccountStack.Screen
        name="HowItWorksScreen"
        component={HowItWorksScreen}
      />
      <AccountStack.Screen name="HelpScreen" component={HelpScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
