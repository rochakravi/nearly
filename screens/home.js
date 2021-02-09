import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../ui-kit/theme';
import Title from '../ui-kit/text';
import Cardd from '../ui-kit/card';
import {Card} from 'react-native-paper';
import Login from './login';

const Home = ({navigation}) => {
  const handler = () => {
    navigation.navigate('Otp');
  };
  return (
    <View style={styles.login}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          color: '#3497FD',
          top: 90,
          left: 30,
          width: 121,
          height: 53,
        }}>
        nearly
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#818181',
          top: 161,
          left: 30,
          width: 152,
          height: 48,
        }}>
        Know what's
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#818181',
          top: 161,
          left: 30,
          width: 152,
          height: 48,
        }}>
        happening nearby
      </Text>
      {/* <Cardd>
        <Login />
      </Cardd> */}
      <Card style={styles.card}>
        <Login />
      </Card>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  login: {
    padding: 8,
  },
  card: {
    borderRadius: 16,
    top: 272,
    left: 0,
    width: 375,
    height: 440,
  },
});
