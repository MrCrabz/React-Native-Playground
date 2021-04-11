import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View  } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';

// Screens
import WelcomeScreen from "./screens/welcome.js";
import FormScreen from "./screens/form.js";
import Account from "./screens/account.js";
import Users from "./screens/users.js";
import Movies from "./screens/movies.js";

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Form: FormScreen,
    Account: Account,
    Users: Users,
    Movies: Movies,
  },
  {
    initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}
