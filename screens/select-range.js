import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import theme from '../ui-kit/theme';
//import Geolocation from '@react-native-community/geolocation';
export default class SelectRange extends Component {
  state = {
    location: null,
  };

  findCoordinates = () => {
    console.log('hh');
    this.setState({
      location: {
        name: 'ravi',
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          {/* <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
