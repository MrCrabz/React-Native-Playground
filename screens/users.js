import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Component  } from 'react-native';
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  inlinebuttons: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    borderWidth: 0,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

class UsersList extends React.Component {

  render(){

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Our Users
        </Text>

        <Text style={styles.subtitle}>
          Here are all of our users so far.
        </Text>

      </View>
    );
  }
}

export default withNavigation(UsersList);
