import React, { useState, useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainTabScreen from "./screens/MainTabScreen";
import RootStackScreen from "./screens/RootStackScreen";

import { AuthContext } from "./components/context";

const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    // userName: null,
    userEmail: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          // userName: action.id,
          userEmail: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          // userName: null,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          // userName: action.id,
          userEmail: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    //NEED TO IMPLIMENT DATABASE AND API HERE TO BE ABLE TO TRUELY AUTHETICATE USER AND PASSWORD
    () => ({
      //Change userEmail from userName
      signIn: async (userEmail, password) => {
        let userToken;
        userToken = null;
        if (userEmail == "user" && password == "pass") {
          try {
            userToken = "vsdfv";
            await AsyncStorage.setItem("userToken", userToken);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({
          type: "LOGIN",
          // id: userName,
          id: userEmail,
          token: userToken,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.log(error);
        }
        dispatch({
          type: "LOGOUT",
        });
      },
      signUp: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }
      dispatch({
        type: "RETRIEVE_TOKEN",
        token: userToken,
      });
    }),
      1000;
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? <MainTabScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
