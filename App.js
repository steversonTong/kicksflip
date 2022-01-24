import React, { useState, useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";

import MainTabScreen from "./screens/MainTabScreen";
import RootStackScreen from "./screens/RootStackScreen";

import { AuthContext } from "./components/context";

const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    // userEmail: null,
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
          userName: action.id,
          // userEmail: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          // userEmail: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          // userEmail: action.id,
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
      signIn: (userName, password) => {
        // setUserToken("rfdsa");
        // setIsLoading(false);
        let userToken;
        userName = null;
        // userEmail = null;
        if (userName == "user" && password == "pass") {
          userToken = "vsdfv";
        }
        dispatch({
          type: "LOGIN",
          id: userName,
          // id2: userEmail,
          token: userToken,
        });
      },
      signOut: () => {
        // setUserToken(null);
        // setIsLoading(false);
        dispatch({
          type: "LOGOUT",
        });
      },
      signUp: () => {
        // setUserToken("rfdsa");
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({
        type: "RETRIEVE_TOKEN",
        token: "afgeswf",
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
