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

class WelcomeScreen extends React.Component {

  openNewScreen = (screenName) => {
    this.props.navigation.navigate(screenName)
    console.log(this.props.navigation);
  }

  render(){

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Welcome to the React Native Sandbox
        </Text>

        <Text style={styles.subtitle}>
          Navigate to the chapter you would like to view it's demo
        </Text>

        <View style={styles.inlinebuttons}>

          <TouchableHighlight style={styles.button} onPress={() => {this.openNewScreen('Form')}}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableHighlight>
          {
          // <TouchableHighlight style={styles.button} onPress={() => {this.openNewScreen('Users')}}>
          //   <Text style={styles.buttonText}>
          //     All Users
          //   </Text>
          // </TouchableHighlight>
          }
          <TouchableHighlight style={styles.button} onPress={() => {this.openNewScreen('Movies')}}>
            <Text style={styles.buttonText}>
              JSON Movies
            </Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}

export default withNavigation(WelcomeScreen);
