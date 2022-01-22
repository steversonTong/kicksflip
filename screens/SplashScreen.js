import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/KSFlogo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </SafeAreaView>
      <Animatable.SafeAreaView
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Stay connected with everyone!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </SafeAreaView>
      </Animatable.SafeAreaView>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
