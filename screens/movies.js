import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, FlatList, View, TouchableHighlight, Component, Linking, ActivityIndicator   } from 'react-native';
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
    marginVertical: 20,
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
  link: {
    color: "rgb(0, 23, 255)",
    fontSize: 18,
    textDecorationLine: "underline"
  },
});

class Movies extends React.Component {

  state = {
    url: "https://reactnative.dev/movies.json",
    isLoading: false,
    data: [],
    movies: "",
  }

  getMovies = () => {


    fetch(this.state.url)
      .then((response) => response.json())
      .then((json) => this.setState({data:json.movies, isLoading:true, movies: json.title, isLoading:true}))
      .catch((error) => console.error(error))
      .finally(() => this.setState({isLoading:false}));

  }

  render(){

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          List Of Movies
        </Text>

        <Text style={styles.subtitle}>
          These movies come from the below link
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL(this.state.url)}>
          {this.state.url}
        </Text>

        <View style={styles.inlinebuttons}>
          <TouchableHighlight style={styles.button} onPress={this.getMovies}>
            <Text style={styles.buttonText}>
              Get Movies
            </Text>
          </TouchableHighlight>
       </View>

       {
         this.state.isLoading == true ?
         <ActivityIndicator/> :
         <FlatList
            data={this.state.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
       }

      </View>
    );
  }
}

export default withNavigation(Movies);
