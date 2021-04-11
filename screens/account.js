import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, SafeAreaView  } from 'react-native';
import { withNavigation } from "react-navigation";

import Database_User from "../databases/users.js";

class Account extends React.Component {

  state = {
    firstName_value: this.props.navigation.getParam('firstName', null),
    lastName_value: this.props.navigation.getParam('lastName', null),
    email_value: this.props.navigation.getParam('email', null),
    // firstName_value: Database_User.getUserInfo.user_firstName,
    // lastName_value: Database_User.getUserInfo.user_lastNam,
    // email_value: Database_User.getUserInfo.user_Email,
  }

  onFocus = () => {
    this.textInput.setNativeProps({
      style: { backgroundColor: 'green' }
    })
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.container500}>
          <Text style={styles.title}>
            {`Welcome back\n`}
            {this.state.firstName_value} {this.state.lastName_value}!
          </Text>
        </View>
        <View style={styles.container500}>
          <Text style={styles.subtitle}>
            {this.state.email_value}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    marginBottom: 15,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "left",
  },
  container500: {
    width: 400,
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    marginVertical: 10,
  }
});

export default withNavigation(Account);
