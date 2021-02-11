import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../ui-kit/theme';
import NButton from '../ui-kit/button';
import {TextInput} from 'react-native-paper';

const Otp = ({navigation}) => {
  const handler = () => {
    navigation.navigate('UpdateProfile');
  };
  return (
    <>
      <Text style={{left: 20, color: '#FF5969', fontSize: 40}}>60 Seconds</Text>
      <View
        style={{
          left: 30,
          right: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
        <TextInput
          mode="outlined"
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            backgroundColor: theme.colors.white,
          }}
        />
      </View>
      <NButton
        title="Verify & Proceed"
        color={theme.colors.primary}
        labelTextColor={theme.colors.white}
        onPress={handler}
      />
    </>
  );
};
export default Otp;
const styles = StyleSheet.create({});
