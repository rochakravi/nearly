import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../ui-kit/theme';
import {TextInput, Card, Button} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  const handler = () => {
    navigation.navigate('Otp');
  };
  return (
    <Card
      style={{
        borderRadius: 8,
        paddingLeft: 30,
        paddingRight: 30,
        height: 440,
      }}>
      {/* <TextInput
        label="Email"
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
      /> */}
      <Text
        style={{color: theme.colors.gray1, fontSize: 20, fontWeight: 'bold'}}>
        Login/Sign Up
      </Text>
      <TextInput
        label="Enter Mobile Number/Email"
        mode="outlined"
        style={{
          height: 40,
          marginBottom: 15,
          borderRadius: 8,
          backgroundColor: theme.colors.white,
        }}
      />
      <Button
        mode="contained"
        color={theme.colors.primary}
        style={{borderRadius: 8, height: 40}}
        labelStyle={{color: theme.colors.white}}
        onPress={() => handler()}>
        CONTINUE
      </Button>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 25,
          marginBottom: 15,
        }}>
        <Button
          icon="facebook"
          mode="contained"
          style={{borderRadius: 8, height: 40}}
          color={theme.colors.facebook}
          labelStyle={{color: theme.colors.white}}
          onPress={handler}>
          Facebook
        </Button>
        <Button
          icon="google"
          mode="contained"
          style={{borderRadius: 8, height: 40}}
          color={theme.colors.white}
          labelStyle={{color: theme.colors.black}}
          onPress={handler}>
          Google
        </Button>
      </View>
      <Button
        icon="apple"
        mode="contained"
        style={{borderRadius: 8, height: 40}}
        color={theme.colors.black}
        labelStyle={{color: theme.colors.white}}
        onPress={handler}>
        Apple ID
      </Button>
    </Card>
  );
};
export default LoginScreen;
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
