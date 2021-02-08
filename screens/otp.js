import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../ui-kit/theme';
import NButton from '../ui-kit/button';

const Otp = ({navigation}) => {
  const handler = () => {
    navigation.navigate('UpdateProfile');
  };
  return (
    <NButton
      title="Verify & Proceed"
      color={theme.colors.primary}
      labelTextColor={theme.colors.white}
      onPress={handler}
    />
  );
};
export default Otp;
const styles = StyleSheet.create({});
