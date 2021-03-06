import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import InboxScreen from "./InboxScreen";
import AccoutStackScreen from "./AccountStackScreen";
import TradeScreen from "./TradeScreen";

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Trading"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbox-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccoutStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
