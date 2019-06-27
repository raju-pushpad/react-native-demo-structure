import React, {Component} from 'react';
import {
  Text, 
  View
} from 'react-native';
import appStyle from '../style/appStyle'
export default class Signup extends Component {

  // below method will be used for configure header bar
  static navigationOptions = {
    headerTitleStyle: { 
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
    title: 'Signup',
  };

  render() {
    return (
      <View style={appStyle.container}>
        <View style = {appStyle.dashboardContainer}>
          <Text style={appStyle.welcome}>signup Screen</Text>
        </View>
      </View>
    );
  }
}

