import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import appStyle from '../style/appStyle' 

export default class CustomDrawer extends Component {
  render() {
    return (
      <View style={appStyle.container}>
        <Text style={appStyle.welcome}>CustomDrawer</Text>
      </View>
    );
  }
}