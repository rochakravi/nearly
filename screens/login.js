import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../ui-kit/theme';
import {Title} from 'react-native-paper';
import Input from '../ui-kit/textinput';
import NButton from '../ui-kit/button';

const Login = ({navigation}) => {
  const handler = () => {
    navigation.navigate('Otp');
  };
  return (
    <View style={styles.login}>
      <Title>Login/Sign Up</Title>
      <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <Input label="Enter Mobile Number/Email" />
        <NButton
          mode="contained"
          title="continue"
          color={theme.colors.primary}
          labelTextColor={theme.colors.white}
          onPress={() => handler()}
        />
      </View>
      <View style={styles.using}>
        <NButton
          icon="facebook"
          mode="contained"
          title="facebook"
          color={theme.colors.facebook}
          labelTextColor={theme.colors.white}
          style={styles.half}
        />
        <NButton
          icon="google"
          mode="contained"
          title="google"
          color={theme.colors.white}
          labelTextColor={theme.colors.black}
        />
      </View>
      <NButton
        icon="apple"
        mode="contained"
        title="Apple ID"
        color={theme.colors.black}
        labelTextColor={theme.colors.white}
      />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  login: {
    margin: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  using: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
});
