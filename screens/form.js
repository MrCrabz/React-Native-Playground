import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, CheckBox, Text, View, TouchableHighlight, TextInput, SafeAreaView, Picker  } from 'react-native';
import { withNavigation } from "react-navigation";
import { RadioButton } from 'react-native-paper';

import {isMobile} from 'react-device-detect';

import Database_User from "../databases/users.js";

class FormScreen extends React.Component {

  state = {
    firstName_Placeholder: "First Name",
    firstName_value: "",
    lastName_Placeholder: "Last Name",
    lastName_value: "",
    email_Placeholder: "Email Address",
    email_value: "",
    password_Placeholder: "Password",
    password_value: "",
    gender_Label: "Gender",
    gender_Selected: "male",
    blood_Label: "Blood Type",
    blood_Type: "Apositive",
    saveCredentials: false,
  }

  submitForm = () => {
    if (this.state.firstName_value != "" && this.state.lastName_value != "" && this.state.email_value != "" && this.state.password_value != "") {

      // this.props.navigation.navigate("Account");
      // Database_User.getUserInfo.user_firstName = this.state.firstName_value;
      // Database_User.getUserInfo.user_lastName = this.state.lastName_value;
      // Database_User.getUserInfo.user_Email = this.state.email_value;
      // Database_User.getUserInfo.user_Password = this.state.password_value;
      // Database_User.getUserInfo.user_Gender = this.state.gender_Selected;
      // Database_User.getUserInfo.user_BloodType = this.state.blood_Type;

        this.props.navigation.navigate("Account", {
          firstName: this.state.firstName_value,
          lastName: this.state.lastName_value,
          email: this.state.email_value,
          saveSetting: false,
        });

      // if(this.state.saveCredentials){
      //   // Save data in static variable
      //   this.props.navigation.navigate("Account");
      //
      //   Database_User.getUserInfo.user_firstName = this.state.firstName_value;
      //   Database_User.getUserInfo.user_lastName = this.state.lastName_value;
      //   Database_User.getUserInfo.user_Email = this.state.email_value;
      //   Database_User.getUserInfo.user_Password = this.state.password_value;
      //   Database_User.getUserInfo.user_Gender = this.state.gender_Selected;
      //   Database_User.getUserInfo.user_BloodType = this.state.blood_Type;
      // } else {
      //   this.props.navigation.navigate("Account", {
      //     firstName: this.state.firstName_value,
      //     lastName: this.state.lastName_value,
      //     email: this.state.email_value,
      //     saveSetting: false,
      //   });
      // }
      // Pass variables through props




    } else {
      if (isMobile) {
        Alert.alert("Fill All Fields");
      } else {
        alert("Fill All Fields");
      }
    }
  }

  setGender = (newgender) => {
    this.setState({gender_Selected: newgender});
  }

  setBloodType = (newBlood) => {
    this.setState({blood_Type: newBlood});
  }

  setSaveCredentials = () => {
    let currentSaveCredentials = !this.state.saveCredentials;
    this.setState({saveCredentials: currentSaveCredentials});
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.container500}>
          <Text style={styles.title}>
            Sign up
          </Text>
          <Text style={styles.subtitle}>
            This is a demo form that includes all the input types we have learned so far.
          </Text>
        </View>

        <View style={styles.textInputsContainerInline}>
         <TextInput
           style={styles.textInputInline}
           placeholder={this.state.firstName_Placeholder}
           onChangeText={(value) => this.setState({firstName_value: value})}
           value={this.state.firstName_value}
         />
         <TextInput
           style={styles.textInputInline}
           placeholder={this.state.lastName_Placeholder}
           onChangeText={(value) => this.setState({lastName_value: value})}
           value={this.state.lastName_value}
         />
        </View>

        <View style={styles.textInputsContainerInline}>
          <TextInput
            style={styles.textInputInline}
            placeholder={this.state.email_Placeholder}
            onChangeText={(value) => this.setState({email_value: value})}
            value={this.state.email_value}
          />
        </View>

        <View style={styles.textInputsContainerInline}>
          <TextInput
            style={styles.textInputInline}
            placeholder={this.state.password_Placeholder}
            onChangeText={(value) => this.setState({password_value: value})}
            value={this.state.password_value}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.container500NoRow}>
          <Text style={styles.questionLabel}>What's your gender?</Text>
          <RadioButton.Group style={styles.radioButtonsContainer} onValueChange={selectedGender => this.setGender(selectedGender)} value={this.state.gender_Selected}>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioButtonLabel}>
                Male
              </Text>
              <RadioButton value="male" style={styles.radioButton} />
            </View>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioButtonLabel}>
                Female
              </Text>
              <RadioButton value="female" style={styles.radioButton} />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.container500NoRow}>
          <Text style={styles.questionLabel}>What's your blood type?</Text>
          <Picker
          selectedValue={this.state.blood_Type}
          onValueChange={
            (bloodType, itemIndex) => this.setBloodType(bloodType)
          }
          >
            <Picker.Item label="A+" value="Apositive" />
            <Picker.Item label="A-" value="Anegative" />
            <Picker.Item label="B+" value="Bpositive" />
            <Picker.Item label="B-" value="Bnegative" />
            <Picker.Item label="AB+" value="ABpositive" />
            <Picker.Item label="AB-" value="ABnegative" />
            <Picker.Item label="O+" value="Opositive" />
            <Picker.Item label="O-" value="Onegative" />
          </Picker>
        </View>

        <View style={styles.container500}>
          <CheckBox
            value={this.state.saveCredentials}
            onChange={this.setSaveCredentials}
            style={styles.checkBox}
          />
          <Text style={styles.questionLabel}>Remember Me?</Text>
       </View>

       <View style={styles.container500}>
         <TouchableHighlight style={styles.button} onPress={this.submitForm}>
           <Text style={styles.buttonText}>
             Submit
           </Text>
         </TouchableHighlight>
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
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  questionLabel: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
    fontWeight: "600",
  },
  inlinebuttons: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  textInputsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  textInputsContainerInline: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  textInputInline: {
    borderWidth: 0,
    backgroundColor: "rgb(240, 240, 240)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
  textInputFullWidth: {
    borderWidth: 0,
    backgroundColor: "rgb(240, 240, 240)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignSelf: 'stretch',
  },
  container500: {
    width: 400,
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    marginVertical: 10,
    alignItems: 'center',
  },
  container500NoRow: {
    width: 400,
    display: "flex",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  radioButtonsContainer: {
    width: 400,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  radioButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginVertical: 10,
  },
  radioButton: {
    marginRight: 0,
  },
  checkBox: {
    marginRight: 10,
  }
});

export default withNavigation(FormScreen);
