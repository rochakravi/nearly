import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../ui-kit/theme';
import {Button} from 'react-native-paper';

const UpdateProfile = ({navigation}) => {
  const handler = () => {
    navigation.navigate('SelectRange');
  };
  return (
    <Button
      mode="contained"
      color={theme.colors.primary}
      style={{borderRadius: 8, height: 40}}
      labelStyle={{color: theme.colors.white}}
      onPress={() => handler()}>
      SUBMIT
    </Button>
  );
};
export default UpdateProfile;
const styles = StyleSheet.create({});
