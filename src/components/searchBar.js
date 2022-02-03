import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {props.clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              props.setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
  },
});
